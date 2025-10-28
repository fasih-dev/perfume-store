import Credentials from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { compare } from 'bcrypt';
import { User } from '@/lib/models/User';
import { connectToDatabase } from '@/lib/mongodb';

export const authOptions: NextAuthOptions = {
	session: { strategy: 'jwt' },
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) return null;
				await connectToDatabase();
				const user = await User.findOne({ email: credentials.email }).lean();
				if (!user) return null;
				const ok = await compare(credentials.password, (user as any).passwordHash);
				if (!ok) return null;
				return { id: (user as any)._id.toString(), name: (user as any).name, email: (user as any).email, role: (user as any).role } as any;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.role = (user as any).role || 'user';
			}
			return token;
		},
		async session({ session, token }) {
			(session.user as any).role = token.role || 'user';
			return session;
		},
	},
	pages: {
		signIn: '/admin/login',
	},
	secret: process.env.NEXTAUTH_SECRET,
};



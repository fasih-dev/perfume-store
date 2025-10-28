import { withAuth } from 'next-auth/middleware';

export default withAuth({
	callbacks: {
		authorized: ({ token }) => {
			// Only allow authenticated users with token
			return !!token;
		},
	},
	pages: {
		signIn: '/admin/login',
	},
});

export const config = {
	matcher: [
		'/admin/dashboard/:path*', 
		'/admin/products/:path*', 
		'/admin/blogs/:path*', 
		'/admin/inventory/:path*'
	],
};



'use client';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { SessionProvider, useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

function AdminNavbar() {
	const { data: session } = useSession();

	return (
		<header className="bg-white border-b border-gray-200 sticky top-0 z-30">
			<div className="px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Link href="/admin/dashboard" className="font-serif text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
							✨ Admin Panel
						</Link>
						<span className="text-sm text-gray-500">Perfume Store</span>
					</div>

					{session && (
						<div className="flex items-center gap-4">
							<div className="text-right hidden md:block">
								<p className="text-sm font-medium text-gray-900">{session.user?.name || session.user?.email}</p>
								<p className="text-xs text-gray-500">Administrator</p>
							</div>
							<div className="flex items-center gap-2">
								<Link
									href="/"
									target="_blank"
									className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
								>
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
									</svg>
									<span className="hidden md:inline">View Store</span>
								</Link>
								<button
									onClick={() => signOut({ callbackUrl: '/admin/login' })}
									className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
								>
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
									</svg>
									<span className="hidden md:inline">Logout</span>
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}

function Sidebar() {
	const pathname = usePathname();

	const isActive = (path: string) => pathname?.startsWith(path);

	return (
		<aside className="bg-gray-900 text-white border-r border-gray-800 min-h-screen">
			<nav className="px-4 py-6 space-y-1">
				<Link 
					href="/admin/dashboard" 
					className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
						isActive('/admin/dashboard') 
							? 'bg-primary-600 text-white' 
							: 'text-gray-300 hover:bg-gray-800 hover:text-white'
					}`}
				>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
					Dashboard
				</Link>
				<Link 
					href="/admin/products" 
					className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
						isActive('/admin/products') 
							? 'bg-primary-600 text-white' 
							: 'text-gray-300 hover:bg-gray-800 hover:text-white'
					}`}
				>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
					</svg>
					Products
				</Link>
				<Link 
					href="/admin/inventory" 
					className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
						isActive('/admin/inventory') 
							? 'bg-primary-600 text-white' 
							: 'text-gray-300 hover:bg-gray-800 hover:text-white'
					}`}
				>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
					</svg>
					Inventory
				</Link>
				<Link 
					href="/admin/blogs" 
					className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
						isActive('/admin/blogs') 
							? 'bg-primary-600 text-white' 
							: 'text-gray-300 hover:bg-gray-800 hover:text-white'
					}`}
				>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
					</svg>
					Blogs
				</Link>
			</nav>
		</aside>
	);
}

function AdminLayoutContent({ children }: { children: ReactNode }) {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const isLoginPage = pathname === '/admin/login';

    // On login page or when not authenticated yet → no admin chrome
    if (isLoginPage || !session) {
        return (
            <div className="min-h-screen bg-gray-50">
                <main className="p-6 lg:p-8">{children}</main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <AdminNavbar />
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
                <Sidebar />
                <main className="p-6 lg:p-8">{children}</main>
            </div>
        </div>
    );
}

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<SessionProvider>
			<AdminLayoutContent>{children}</AdminLayoutContent>
		</SessionProvider>
	);
}

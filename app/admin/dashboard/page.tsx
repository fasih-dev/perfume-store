import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { connectToDatabase } from '@/lib/mongodb';
import { Product } from '@/lib/models/Product';
import { Blog } from '@/lib/models/Blog';

export default async function AdminDashboardPage() {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	
	const [totalProducts, totalBlogs, lowStockProducts] = await Promise.all([
		Product.countDocuments(),
		Blog.countDocuments(),
		Product.countDocuments({ stock: { $lt: 10, $gt: 0 } }),
	]);

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
				<p className="text-gray-600 mt-1">Welcome back, {session?.user?.email}</p>
			</div>

			{/* Stats Grid */}
			<div className="grid md:grid-cols-3 gap-6">
				<div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-primary-600">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-gray-600">Total Products</p>
							<p className="text-3xl font-bold text-gray-900 mt-2">{totalProducts}</p>
						</div>
						<div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
							</svg>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-accent-600">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-gray-600">Total Blogs</p>
							<p className="text-3xl font-bold text-gray-900 mt-2">{totalBlogs}</p>
						</div>
						<div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
							<svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
							</svg>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-secondary-600">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-gray-600">Low Stock Alerts</p>
							<p className="text-3xl font-bold text-gray-900 mt-2">{lowStockProducts}</p>
						</div>
						<div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
							<svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
							</svg>
						</div>
					</div>
				</div>
			</div>

			{/* Quick Actions */}
			<div className="bg-white rounded-xl shadow-md p-6">
				<h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
					<a 
						href="/admin/products/new" 
						className="flex items-center gap-3 p-4 rounded-lg bg-primary-50 hover:bg-primary-100 text-primary-700 transition-colors"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
						</svg>
						<span className="font-medium">Add Product</span>
					</a>
					<a 
						href="/admin/blogs/new" 
						className="flex items-center gap-3 p-4 rounded-lg bg-accent-50 hover:bg-accent-100 text-accent-700 transition-colors"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
						</svg>
						<span className="font-medium">Write Article</span>
					</a>
					<a 
						href="/admin/inventory" 
						className="flex items-center gap-3 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 transition-colors"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
						</svg>
						<span className="font-medium">Manage Stock</span>
					</a>
					<a 
						href="/" 
						className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
						</svg>
						<span className="font-medium">View Website</span>
					</a>
				</div>
			</div>
		</div>
	);
}

import { connectToDatabase } from '@/lib/mongodb';
import { Product } from '@/lib/models/Product';
import Link from 'next/link';

export default async function AdminProductsPage() {
	await connectToDatabase();
	const products = await Product.find().sort({ createdAt: -1 }).lean();
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-semibold">Products</h1>
				<Link href="/admin/products/new" className="px-3 py-2 bg-black text-white rounded">New Product</Link>
			</div>
			<div className="overflow-x-auto">
				<table className="min-w-full text-sm">
					<thead>
						<tr className="text-left border-b">
							<th className="py-2 pr-4">Name</th>
							<th className="py-2 pr-4">Price</th>
							<th className="py-2 pr-4">Stock</th>
							<th className="py-2 pr-4">Actions</th>
						</tr>
					</thead>
					<tbody>
						{products.map((p: any) => (
							<tr key={p._id} className="border-b">
								<td className="py-2 pr-4">{p.name}</td>
								<td className="py-2 pr-4">${p.price.toFixed(2)}</td>
								<td className="py-2 pr-4">{p.stock}</td>
								<td className="py-2 pr-4">
									<Link href={`/admin/products/${p._id}/edit`} className="text-blue-600 hover:underline">Edit</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}



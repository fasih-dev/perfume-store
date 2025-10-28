import { connectToDatabase } from '@/lib/mongodb';
import { Product } from '@/lib/models/Product';

export default async function AdminInventoryPage() {
	await connectToDatabase();
	const products = await Product.find().sort({ name: 1 }).lean();
	return (
		<div className="space-y-4">
			<h1 className="text-2xl font-semibold">Inventory</h1>
			<ul className="divide-y">
				{products.map((p: any) => (
					<li key={p._id} className="py-3 flex items-center justify-between text-sm">
						<span>{p.name}</span>
						<span>Stock: {p.stock}</span>
					</li>
				))}
			</ul>
		</div>
	);
}



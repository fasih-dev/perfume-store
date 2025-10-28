import { connectToDatabase } from '@/lib/mongodb';
import { Product } from '@/lib/models/Product';
import EditForm from './product-edit-form';

type Params = { params: Promise<{ id: string }> };

export default async function EditProductPage({ params }: Params) {
	const { id } = await params;
	await connectToDatabase();
	const product = await Product.findById(id).lean();
	return (
		<div className="space-y-4">
			<h1 className="text-2xl font-semibold">Edit Product</h1>
			<EditForm initial={product ? {
				_id: product._id?.toString(),
				name: product.name,
				slug: product.slug,
				description: product.description,
				price: product.price,
				stock: product.stock,
				images: product.images || [],
				seoTitle: product.seoTitle,
				seoDescription: product.seoDescription,
			} : undefined} />
		</div>
	);
}



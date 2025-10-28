import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Product } from '@/lib/models/Product';

export async function GET() {
	await connectToDatabase();
	const products = await Product.find().sort({ createdAt: -1 });
	return new NextResponse(JSON.stringify(products), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
		},
	});
}

export async function POST(request: NextRequest) {
	try {
		await connectToDatabase();
		const body = await request.json();
		console.log('Creating product with data:', JSON.stringify(body, null, 2));
		const product = await Product.create(body);
		console.log('Product created:', product._id, 'images:', product.images);
		return NextResponse.json(product, { status: 201 });
	} catch (e: any) {
		console.error('Error creating product:', e.message);
		return NextResponse.json({ error: e.message }, { status: 400 });
	}
}

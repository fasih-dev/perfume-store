import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Product } from '@/lib/models/Product';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	await connectToDatabase();
	const product = await Product.findById(id);
	if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
	return NextResponse.json(product);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	try {
		await connectToDatabase();
		const body = await req.json();
		const updated = await Product.findByIdAndUpdate(id, body, { new: true });
		if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
		return NextResponse.json(updated);
	} catch (e: any) {
		return NextResponse.json({ error: e.message }, { status: 400 });
	}
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	await connectToDatabase();
	await Product.findByIdAndDelete(id);
	return NextResponse.json({ ok: true });
}



import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';
import { Types } from 'mongoose';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    await connectToDatabase();
    const blog = Types.ObjectId.isValid(id)
        ? await Blog.findById(id)
        : await Blog.findOne({ slug: id });
	if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
	return NextResponse.json(blog);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
        const { id } = await params;
		await connectToDatabase();
		const data = await req.json();
        const blog = await Blog.findByIdAndUpdate(id, data, { new: true });
		return NextResponse.json(blog);
	} catch (e: any) {
		return NextResponse.json({ error: e.message }, { status: 400 });
	}
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    await connectToDatabase();
    await Blog.findByIdAndDelete(id);
	return NextResponse.json({ ok: true });
}

import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';

export async function GET() {
	try {
		await connectToDatabase();
		const blogs = await Blog.find({ status: 'published' }).sort({ publishedAt: -1 });
		return NextResponse.json(blogs);
	} catch (e: any) {
		console.error('Error fetching blogs:', e);
		return NextResponse.json({ error: e.message || 'Failed to fetch blogs' }, { status: 400 });
	}
}

export async function POST(request: NextRequest) {
	try {
		await connectToDatabase();
		const body = await request.json();
		const blog = await Blog.create(body);
		return NextResponse.json(blog, { status: 201 });
	} catch (e: any) {
		return NextResponse.json({ error: e.message }, { status: 400 });
	}
}

import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData();
		const file = formData.get('file');

		if (!file || !(file instanceof Blob)) {
			return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
		}

		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const res = await new Promise((resolve, reject) => {
			const uploadStream = cloudinary.uploader.upload_stream({ folder: 'perfume-store' }, (error, result) => {
				if (error) return reject(error);
				resolve(result);
			});
			uploadStream.end(buffer);
		});

		return NextResponse.json(res);
	} catch (err: any) {
		return NextResponse.json({ error: err.message || 'Upload failed' }, { status: 500 });
	}
}



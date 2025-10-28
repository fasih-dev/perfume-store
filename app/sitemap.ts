import { MetadataRoute } from 'next';
import { connectToDatabase } from '@/lib/mongodb';
import { Product } from '@/lib/models/Product';
import { Blog } from '@/lib/models/Blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
	await connectToDatabase();
	const [products, blogs] = await Promise.all([
		Product.find({}, 'slug updatedAt').lean(),
		Blog.find({ status: 'published' }, 'slug updatedAt').lean(),
	]);

	const staticRoutes: MetadataRoute.Sitemap = [
		{ url: `${baseUrl}/`, lastModified: new Date() },
		{ url: `${baseUrl}/products`, lastModified: new Date() },
		{ url: `${baseUrl}/blogs`, lastModified: new Date() },
		{ url: `${baseUrl}/about`, lastModified: new Date() },
		{ url: `${baseUrl}/contact`, lastModified: new Date() },
		{ url: `${baseUrl}/privacy`, lastModified: new Date() },
		{ url: `${baseUrl}/terms`, lastModified: new Date() },
	];

	const productRoutes = products.map((p: any) => ({
		url: `${baseUrl}/products/${p.slug}`,
		lastModified: new Date(p.updatedAt || Date.now()),
	}));

	const blogRoutes = blogs.map((b: any) => ({
		url: `${baseUrl}/blogs/${b.slug}`,
		lastModified: new Date(b.updatedAt || Date.now()),
	}));

	return [...staticRoutes, ...productRoutes, ...blogRoutes];
}



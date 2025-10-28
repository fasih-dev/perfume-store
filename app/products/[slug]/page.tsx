import Image from 'next/image';
import { connectToDatabase } from '@/lib/mongodb';
import { Product } from '@/lib/models/Product';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { jsonLdScript, productJsonLd } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

interface ProductData {
	_id: { toString(): string } | string;
	name?: string;
	slug?: string;
	description?: string;
	price?: number;
	stock?: number;
	images?: string[];
	keywords?: string[];
	seoTitle?: string;
	seoDescription?: string;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
	const { slug } = await params;
	await connectToDatabase();
	const product = await Product.findOne({ slug }).lean() as ProductData | null;
	if (!product) return { title: 'Product not found' };
	return {
		title: product.seoTitle || product.name || 'Product',
		description: product.seoDescription || (product.description || '').slice(0, 150),
		openGraph: { images: product.images?.slice(0, 1) || [] },
	};
}

export default async function ProductPage({ params }: Params) {
	const { slug } = await params;
	await connectToDatabase();
	const product = await Product.findOne({ slug }).lean() as ProductData | null;
	
	if (!product) {
		return (
			<div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
					<a href="/products" className="text-primary-600 hover:underline">
						← Back to Products
					</a>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-gray-50 min-h-screen">
			<div className="mx-auto max-w-7xl px-6 py-12">
				<Breadcrumbs items={[
					{ label: 'Home', href: '/' }, 
					{ label: 'Fragrances', href: '/products' }, 
					{ label: product.name || 'Product' }
				]} />

				<script 
					type="application/ld+json" 
					dangerouslySetInnerHTML={jsonLdScript(productJsonLd({ 
						name: product.name || 'Product', 
						description: product.seoDescription || product.description, 
						images: product.images, 
						url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/products/${product.slug || 'unknown'}` 
					}))} 
				/>

				<div className="grid lg:grid-cols-2 gap-12 mt-8">
					{/* Product Images */}
					<div className="space-y-4">
						<div className="relative aspect-square bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl">
							{product.images?.[0] ? (
								<Image 
									src={product.images[0]} 
									alt={product.name || 'Product'} 
									fill 
									sizes="(max-width:768px) 100vw, 50vw" 
									className="object-cover" 
									priority
								/>
							) : (
								<div className="absolute inset-0 flex items-center justify-center text-gray-400">
									No image available
								</div>
							)}
						</div>
					</div>

					{/* Product Info */}
					<div className="space-y-6">
						<div>
							<h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
								{product.name || 'Product'}
							</h1>
							<div className="flex items-center gap-4 mb-6">
								<span className="text-4xl font-bold text-primary-600">
									${(product.price || 0).toFixed(2)}
								</span>
								{(product.stock || 0) > 0 ? (
									<span className="px-4 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-semibold">
										In Stock ({product.stock || 0} available)
									</span>
								) : (
									<span className="px-4 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
										Out of Stock
									</span>
								)}
							</div>
						</div>

						<div className="prose prose-lg max-w-none">
							<p className="text-gray-700 leading-relaxed text-lg">
								{product.description || 'No description available'}
							</p>
						</div>

						{product.keywords && product.keywords.length > 0 && (
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">Notes & Accords:</h3>
								<div className="flex flex-wrap gap-2">
									{product.keywords.map((keyword: string, idx: number) => (
										<span 
											key={idx} 
											className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
										>
											{keyword}
										</span>
									))}
								</div>
							</div>
						)}

						<div className="border-t border-gray-200 pt-6 space-y-4">
							<div className="flex items-center gap-3 text-gray-700">
								<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
								<span>100% Authentic Fragrance</span>
							</div>
							<div className="flex items-center gap-3 text-gray-700">
								<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<span>Fast & Secure Delivery</span>
							</div>
							<div className="flex items-center gap-3 text-gray-700">
								<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
								<span>Premium Quality Guarantee</span>
							</div>
						</div>

						<div className="pt-6">
							<button 
								disabled={(product.stock || 0) === 0}
								className="w-full md:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 disabled:transform-none"
							>
								{(product.stock || 0) > 0 ? 'Add to Cart (Coming Soon)' : 'Out of Stock'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

import Link from 'next/link';
import Image from 'next/image';
import { connectToDatabase } from '@/lib/mongodb';
import { Product } from '@/lib/models/Product';

export const metadata = {
	title: 'Shop Luxury Perfumes - Premium Fragrances Collection',
	description: 'Explore our curated collection of luxury perfumes and premium fragrances. Find your perfect scent from our exclusive range.',
};

export default async function ProductsPage() {
	await connectToDatabase();
	const products = await Product.find().sort({ createdAt: -1 }).lean();
	
	return (
		<div className="bg-gray-50 min-h-screen">
			<div className="mx-auto max-w-7xl px-6 py-12">
				{/* Page Header */}
				<div className="text-center mb-12">
					<h1 className="font-serif text-5xl font-bold text-gray-900 mb-4">
						Our Fragrance Collection
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Discover luxury perfumes crafted for those who appreciate the finest scents
					</p>
				</div>

				{/* Products Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((p: any) => (
						<Link 
							key={p._id} 
							href={`/products/${p.slug}`} 
							className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
						>
							<div className="relative aspect-square bg-gradient-to-br from-primary-50 to-purple-50 overflow-hidden">
								{p.images?.[0] && (
									<Image 
										src={p.images[0]} 
										alt={p.name} 
										fill 
										sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" 
										className="object-cover group-hover:scale-110 transition-transform duration-500" 
									/>
								)}
								<div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
									${(p.price || 0).toFixed(2)}
								</div>
								{p.stock < 10 && p.stock > 0 && (
									<div className="absolute top-4 left-4 bg-secondary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
										Only {p.stock} left
									</div>
								)}
								{p.stock === 0 && (
									<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
										<span className="text-white font-bold text-lg">Out of Stock</span>
									</div>
								)}
							</div>
							<div className="p-6">
								<h2 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
									{p.name}
								</h2>
								<p className="text-gray-600 text-sm line-clamp-2 mb-4">{p.description}</p>
								<div className="flex items-center justify-between">
									<span className="text-primary-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center">
										View Details
										<svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>

				{products.length === 0 && (
					<div className="text-center py-16">
						<p className="text-xl text-gray-600">No products available at the moment.</p>
						<Link href="/" className="mt-4 inline-block text-primary-600 hover:underline">
							Return to Homepage
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

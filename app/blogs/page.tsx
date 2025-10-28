import Link from 'next/link';
import Image from 'next/image';
import { connectToDatabase } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';

export const metadata = {
	title: 'Fragrance Journal - Perfume Tips & Guides',
	description: 'Read our latest articles on perfumes, fragrance tips, and expert guides to help you find your perfect scent.',
};

export default async function BlogsPage() {
	await connectToDatabase();
	const blogs = await Blog.find({ status: 'published' }).sort({ publishedAt: -1 }).lean();
	
	return (
		<div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
			<div className="mx-auto max-w-7xl px-6 py-12">
				{/* Page Header */}
				<div className="text-center mb-12">
					<h1 className="font-serif text-5xl font-bold text-primary-900 mb-4">
						Fragrance Journal
					</h1>
					<p className="text-lg text-primary-600 max-w-2xl mx-auto">
						Expert insights, tips, and stories from the world of perfumery
					</p>
				</div>

				{/* Blog Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{blogs.map((b: any) => (
						<Link 
							key={b._id} 
							href={`/blogs/${b.slug}`} 
							className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
						>
							{b.featuredImage && (
								<div className="relative aspect-video bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden">
									<Image 
										src={b.featuredImage} 
										alt={b.title} 
										fill 
										sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" 
										className="object-cover group-hover:scale-110 transition-transform duration-500" 
									/>
								</div>
							)}
							<div className="p-6">
								<div className="text-xs text-accent-600 font-semibold mb-2">
									{new Date(b.publishedAt).toLocaleDateString('en-US', { 
										year: 'numeric', 
										month: 'long', 
										day: 'numeric' 
									})}
								</div>
								<h2 className="font-serif text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors line-clamp-2">
									{b.title}
								</h2>
								<span className="text-accent-600 font-semibold text-sm group-hover:underline inline-flex items-center">
									Read Article
									<svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</span>
							</div>
						</Link>
					))}
				</div>

				{blogs.length === 0 && (
					<div className="text-center py-16">
						<p className="text-xl text-primary-600">No articles available at the moment.</p>
						<Link href="/" className="mt-4 inline-block text-accent-600 hover:underline">
							Return to Homepage
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

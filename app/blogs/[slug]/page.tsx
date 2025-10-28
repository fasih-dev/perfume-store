import type { Metadata } from 'next';
import Image from 'next/image';
import { connectToDatabase } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';
import ReactMarkdown from 'react-markdown';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { blogPostingJsonLd, jsonLdScript } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

interface BlogData {
	_id: { toString(): string } | string;
	title?: string;
	slug?: string;
	content?: string;
	contentType?: 'markdown' | 'html';
	status?: string;
	publishedAt?: string | Date;
	featuredImage?: string;
	seoTitle?: string;
	seoDescription?: string;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
	const { slug } = await params;
	await connectToDatabase();
	const blog = await Blog.findOne({ slug }).lean() as BlogData | null;
	if (!blog) return { title: 'Blog not found' };
	return {
		title: blog.seoTitle || blog.title,
		description: blog.seoDescription || (blog.content || '').slice(0, 150),
		openGraph: {
			images: blog.featuredImage ? [blog.featuredImage] : [],
		},
	};
}

export default async function BlogPostPage({ params }: Params) {
	const { slug } = await params;
	await connectToDatabase();
	const blog = await Blog.findOne({ slug }).lean() as BlogData | null;
	
	if (!blog) {
		return (
			<div className="min-h-screen flex items-center justify-center p-6">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-primary-900 mb-4">Article Not Found</h1>
					<a href="/blogs" className="text-accent-600 hover:underline">
						← Back to Journal
					</a>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
			<article className="mx-auto max-w-4xl px-6 py-12">
				<Breadcrumbs items={[
					{ label: 'Home', href: '/' }, 
					{ label: 'Journal', href: '/blogs' }, 
					{ label: blog.title || 'Article' }
				]} />

				<script 
					type="application/ld+json" 
					dangerouslySetInnerHTML={jsonLdScript(blogPostingJsonLd({ 
						title: blog.title || 'Article', 
						description: blog.seoDescription || blog.content?.slice(0, 120), 
						url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blogs/${blog.slug || 'unknown'}`, 
						image: blog.featuredImage 
					}))} 
				/>

				{/* Featured Image */}
				{blog.featuredImage && (
					<div className="relative aspect-video bg-primary-100 rounded-2xl overflow-hidden shadow-xl mb-8 mt-8">
						<Image 
							src={blog.featuredImage} 
							alt={blog.title || 'Blog article'} 
							fill 
							sizes="100vw" 
							className="object-cover" 
							priority
						/>
					</div>
				)}

				{/* Article Header */}
				<header className="mb-8">
					<h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
						{blog.title || 'Article'}
					</h1>
					{blog.publishedAt && (
						<div className="flex items-center gap-4 text-sm text-primary-600">
							<time dateTime={typeof blog.publishedAt === 'string' ? blog.publishedAt : blog.publishedAt.toISOString()}>
								{new Date(blog.publishedAt).toLocaleDateString('en-US', { 
									year: 'numeric', 
									month: 'long', 
									day: 'numeric' 
								})}
							</time>
						</div>
					)}
				</header>

			{/* Article Content */}
			<div className="prose prose-lg prose-primary max-w-none text-primary-700 leading-relaxed">
				{blog.contentType === 'html' ? (
					<div 
						className="contents" 
						dangerouslySetInnerHTML={{ __html: blog.content || '' }} 
					/>
				) : (
					<ReactMarkdown>
						{blog.content || ''}
					</ReactMarkdown>
				)}
			</div>

				{/* Back to Blog Link */}
				<div className="mt-12 pt-8 border-t border-primary-200">
					<a 
						href="/blogs" 
						className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold transition-colors"
					>
						<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
						Back to Journal
					</a>
				</div>
			</article>
		</div>
	);
}

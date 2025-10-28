import { connectToDatabase } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';
import BlogEditor from '@/components/admin/BlogEditor';

type Params = { params: Promise<{ id: string }> };

interface BlogData {
	_id: { toString(): string } | string;
	title?: string;
	slug?: string;
	content?: string;
	contentType?: 'markdown' | 'html';
	status?: 'draft' | 'published';
	featuredImage?: string;
	seoTitle?: string;
	seoDescription?: string;
}

export default async function EditBlogPage({ params }: Params) {
	const { id } = await params;
	await connectToDatabase();
	const blog = await Blog.findById(id).lean() as BlogData | null;
	
	if (!blog) {
		return <div>Blog not found</div>;
	}
	
	return (
		<div className="space-y-4">
			<h1 className="text-2xl font-semibold">Edit Blog</h1>
			<BlogEditor initial={{
				_id: blog._id?.toString(),
				title: blog.title,
				slug: blog.slug,
				content: blog.content,
				contentType: blog.contentType,
				status: blog.status,
				featuredImage: blog.featuredImage,
				seoTitle: blog.seoTitle,
				seoDescription: blog.seoDescription,
			}} />
		</div>
	);
}



import BlogEditor from '@/components/admin/BlogEditor';

export const metadata = { title: 'New Blog' };

export default function NewBlogPage() {
	return (
		<div className="space-y-4">
			<h1 className="text-2xl font-semibold">Create Blog</h1>
			<BlogEditor />
		</div>
	);
}



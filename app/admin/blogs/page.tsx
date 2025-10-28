import { connectToDatabase } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';
import Link from 'next/link';

export default async function AdminBlogsPage() {
	await connectToDatabase();
	const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-semibold">Blogs</h1>
				<Link href="/admin/blogs/new" className="px-3 py-2 bg-black text-white rounded">New Blog</Link>
			</div>
			<div className="overflow-x-auto">
				<table className="min-w-full text-sm">
					<thead>
						<tr className="text-left border-b">
							<th className="py-2 pr-4">Title</th>
							<th className="py-2 pr-4">Status</th>
							<th className="py-2 pr-4">Actions</th>
						</tr>
					</thead>
					<tbody>
						{blogs.map((b: any) => (
							<tr key={b._id} className="border-b">
								<td className="py-2 pr-4">{b.title}</td>
								<td className="py-2 pr-4">{b.status}</td>
								<td className="py-2 pr-4">
									<Link href={`/admin/blogs/${b._id}/edit`} className="text-blue-600 hover:underline">Edit</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}



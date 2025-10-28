"use client";
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

type Initial = {
	_id?: string;
	name?: string;
	slug?: string;
	description?: string;
	price?: number;
	stock?: number;
	images?: string[];
	seoTitle?: string;
	seoDescription?: string;
};

export default function EditForm({ initial }: { initial?: Initial }) {
	const router = useRouter();
	const [name, setName] = useState(initial?.name || "");
	const [slug, setSlug] = useState(initial?.slug || "");
	const [description, setDescription] = useState(initial?.description || "");
	const [price, setPrice] = useState<number>(initial?.price || 0);
	const [stock, setStock] = useState<number>(initial?.stock || 0);
	const [images, setImages] = useState<string[]>(initial?.images || []);
	const [seoTitle, setSeoTitle] = useState(initial?.seoTitle || "");
	const [seoDescription, setSeoDescription] = useState(initial?.seoDescription || "");
	const [uploading, setUploading] = useState(false);
	const [saving, setSaving] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function uploadImage(file: File) {
		const formData = new FormData();
		formData.append('file', file);
		setUploading(true);
		try {
			const res = await fetch('/api/upload', { method: 'POST', body: formData });
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || 'Upload failed');
			setImages((prev) => [...prev, data.secure_url || data.url]);
		} catch (e: any) {
			setError(e.message);
		} finally {
			setUploading(false);
		}
	}

	async function onSubmit(e: FormEvent) {
		e.preventDefault();
		if (!initial?._id) return;
		setError(null);
		setSaving(true);
		try {
			const res = await fetch(`/api/products/${initial._id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, slug, description, price, stock, images, seoTitle, seoDescription })
			});
			if (!res.ok) throw new Error((await res.json()).error || 'Failed to update');
			router.push('/admin/products');
		} catch (e: any) {
			setError(e.message);
		} finally {
			setSaving(false);
		}
	}

	return (
		<form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<div className="lg:col-span-2 space-y-4">
				<div>
					<label className="block text-sm font-medium mb-1">Name</label>
					<input value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded px-3 py-2" required />
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">Slug</label>
					<input value={slug} onChange={(e) => setSlug(e.target.value)} className="w-full border rounded px-3 py-2" />
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">Description</label>
					<textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border rounded px-3 py-2 h-32" />
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label className="block text-sm font-medium mb-1">Price</label>
						<input type="number" step="0.01" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} className="w-full border rounded px-3 py-2" required />
					</div>
					<div>
						<label className="block text-sm font-medium mb-1">Stock</label>
						<input type="number" value={stock} onChange={(e) => setStock(parseInt(e.target.value || '0'))} className="w-full border rounded px-3 py-2" required />
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<div>
					<label className="block text-sm font-medium mb-1">Images</label>
					<input type="file" accept="image/*" onChange={(e) => e.target.files && uploadImage(e.target.files[0])} />
					{uploading && <p className="text-sm text-gray-500 mt-1">Uploading...</p>}
					<div className="grid grid-cols-2 gap-2 mt-2">
						{images.map((url) => (
							<div key={url} className="aspect-square bg-gray-100 rounded overflow-hidden">
								<img src={url} alt="uploaded" className="w-full h-full object-cover" />
							</div>
						))}
					</div>
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">SEO Title</label>
					<input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full border rounded px-3 py-2" />
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">SEO Description</label>
					<textarea value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} className="w-full border rounded px-3 py-2 h-24" />
				</div>
				<button type="submit" disabled={saving} className="w-full bg-black text-white py-2 rounded">{saving ? 'Saving...' : 'Update Product'}</button>
			</div>
		</form>
	);
}



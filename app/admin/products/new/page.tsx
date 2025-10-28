"use client";
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function NewProductPage() {
	const router = useRouter();
	const [name, setName] = useState("");
	const [slug, setSlug] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState<number>(0);
	const [stock, setStock] = useState<number>(0);
	const [images, setImages] = useState<string[]>([]);
	const [seoTitle, setSeoTitle] = useState("");
	const [seoDescription, setSeoDescription] = useState("");
	const [uploading, setUploading] = useState(false);
	const [saving, setSaving] = useState(false);
	const [error, setError] = useState<string | null>(null);

	function toSlug(value: string) {
		return value
			.toLowerCase()
			.replace(/[^a-z0-9\s-]/g, '')
			.trim()
			.replace(/\s+/g, '-')
	}

	async function uploadImage(file: File) {
		console.log('📤 Starting upload for file:', file.name);
		const formData = new FormData();
		formData.append('file', file);
		setUploading(true);
		setError(null);
		try {
			console.log('📡 Sending upload request to /api/upload...');
			const res = await fetch('/api/upload', { method: 'POST', body: formData });
			console.log('📥 Upload response status:', res.status);
			const data = await res.json();
			console.log('📦 Upload response data:', data);
			if (!res.ok) throw new Error(data.error || 'Upload failed');
			const url = data.secure_url || data.url;
			if (!url) {
				throw new Error('No URL returned from upload');
			}
			console.log('✅ Uploaded image URL:', url);
			setImages((prev) => {
				const updated = [...prev, url];
				console.log('📋 Images array updated to:', updated);
				return updated;
			});
		} catch (e: any) {
			console.error('❌ Upload error:', e);
			setError(e.message);
			alert(`Upload failed: ${e.message}`);
		} finally {
			setUploading(false);
		}
	}

	async function onSubmit(e: FormEvent) {
		e.preventDefault();
		setError(null);
		setSaving(true);
		try {
			const payload = { name, slug: slug || toSlug(name), description, price, stock, images, seoTitle, seoDescription };
			console.log('Submitting product with images:', images);
			const res = await fetch('/api/products', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload)
			});
			const result = await res.json();
			if (!res.ok) throw new Error(result.error || 'Failed to create');
			console.log('Product created successfully');
			router.push('/admin/products');
		} catch (e: any) {
			console.error('Save error:', e);
			setError(e.message);
		} finally {
			setSaving(false);
		}
	}

	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-semibold">New Product</h1>
			{error && <p className="text-sm text-red-600">{error}</p>}
			<form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2 space-y-4">
					<div>
						<label className="block text-sm font-medium mb-1">Name</label>
						<input value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded px-3 py-2" required />
					</div>
					<div>
						<label className="block text-sm font-medium mb-1">Slug</label>
						<input value={slug} onChange={(e) => setSlug(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="auto from name if empty" />
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
						<label className="block text-sm font-medium mb-1">Images ({images.length} uploaded)</label>
						<input type="file" accept="image/*" onChange={(e) => e.target.files && uploadImage(e.target.files[0])} />
						{uploading && <p className="text-sm text-gray-500 mt-1">Uploading...</p>}
						{images.length === 0 && !uploading && (
							<p className="text-sm text-orange-600 mt-1">⚠️ No images uploaded yet</p>
						)}
						<div className="grid grid-cols-2 gap-2 mt-2">
							{images.map((url) => (
								<div key={url} className="aspect-square bg-gray-100 rounded overflow-hidden relative">
									<img src={url} alt="uploaded" className="w-full h-full object-cover" />
									<button
										onClick={() => setImages(prev => prev.filter(u => u !== url))}
										className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-700"
										title="Remove image"
									>
										×
									</button>
								</div>
							))}
						</div>
						{images.length > 0 && (
							<div className="mt-2 text-xs text-gray-600">
								<p>Image URLs:</p>
								{images.map((url, i) => (
									<p key={i} className="truncate">{url}</p>
								))}
							</div>
						)}
					</div>
					<div>
						<label className="block text-sm font-medium mb-1">SEO Title</label>
						<input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full border rounded px-3 py-2" />
					</div>
					<div>
						<label className="block text-sm font-medium mb-1">SEO Description</label>
						<textarea value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} className="w-full border rounded px-3 py-2 h-24" />
					</div>
					<button type="submit" disabled={saving} className="w-full bg-black text-white py-2 rounded">{saving ? 'Saving...' : 'Create Product'}</button>
				</div>
			</form>
		</div>
	);
}




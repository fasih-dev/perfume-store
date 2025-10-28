"use client";
import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';

const Editor = dynamic(() => import('@tinymce/tinymce-react').then(m => m.Editor), { ssr: false });

type Blog = {
  _id?: string;
  title: string;
  slug: string;
  content: string;
  contentType: 'markdown' | 'html';
  status: 'draft' | 'published';
  featuredImage?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export default function BlogEditor({ initial }: { initial?: Partial<Blog> }) {
  const [title, setTitle] = useState(initial?.title || '');
  const [slug, setSlug] = useState(initial?.slug || '');
  const [contentType, setContentType] = useState<"markdown" | "html">((initial?.contentType as any) || 'markdown');
  const [content, setContent] = useState(initial?.content || '');
  const [status, setStatus] = useState<"draft" | "published">((initial?.status as any) || 'draft');
  const [featuredImage, setFeaturedImage] = useState(initial?.featuredImage || '');
  const [seoTitle, setSeoTitle] = useState(initial?.seoTitle || '');
  const [seoDescription, setSeoDescription] = useState(initial?.seoDescription || '');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!initial?.slug) {
      const s = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
      setSlug(s);
    }
  }, [title]);

  async function handleUpload(file: File) {
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: form });
    if (!res.ok) throw new Error('Upload failed');
    const data = await res.json();
    return (data.secure_url || data.url) as string;
  }

  async function onSubmit() {
    setSaving(true);
    const payload: Blog = { title, slug, content, contentType, status, featuredImage, seoTitle, seoDescription } as any;
    const method = initial?._id ? 'PUT' : 'POST';
    const url = initial?._id ? `/api/blogs/${initial._id}` : '/api/blogs';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    setSaving(false);
    if (!res.ok) alert('Save failed'); else alert('Saved');
  }

  const editor = useMemo(() => {
    if (contentType === 'markdown') {
      return (
        <div className="grid md:grid-cols-2 gap-4">
          <textarea className="border rounded p-2 h-80" value={content} onChange={e => setContent(e.target.value)} placeholder="Write markdown..." />
          <div className="prose border rounded p-2 h-80 overflow-auto">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      );
    }
    return (
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
        init={{ menubar: true, height: 400 }}
        value={content}
        onEditorChange={(v) => setContent(v)}
      />
    );
  }, [contentType, content]);

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm">Title</label>
          <input className="w-full border rounded px-3 py-2" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="space-y-2">
          <label className="block text-sm">Slug</label>
          <input className="w-full border rounded px-3 py-2" value={slug} onChange={e => setSlug(e.target.value)} />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm">Editor</label>
        <div className="flex gap-2 text-sm">
          <button type="button" className={`px-3 py-1 rounded border ${contentType==='markdown'?'bg-black text-white':''}`} onClick={() => setContentType('markdown')}>Markdown</button>
          <button type="button" className={`px-3 py-1 rounded border ${contentType==='html'?'bg-black text-white':''}`} onClick={() => setContentType('html')}>Rich Text</button>
        </div>
        {editor}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm">SEO Title</label>
          <input className="w-full border rounded px-3 py-2" value={seoTitle} onChange={e => setSeoTitle(e.target.value)} />
        </div>
        <div className="space-y-2">
          <label className="block text-sm">SEO Description</label>
          <input className="w-full border rounded px-3 py-2" value={seoDescription} onChange={e => setSeoDescription(e.target.value)} />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm">Featured Image</label>
        <div className="flex items-center gap-3">
          <input type="file" accept="image/*" onChange={async (e) => {
            const f = e.target.files?.[0];
            if (!f) return;
            const url = await handleUpload(f);
            setFeaturedImage(url);
          }} />
          {featuredImage && <a href={featuredImage} target="_blank" className="text-blue-600 text-sm">Preview</a>}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <select className="border rounded px-3 py-2" value={status} onChange={e => setStatus(e.target.value as any)}>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <button onClick={onSubmit} disabled={saving} className="px-4 py-2 rounded bg-black text-white">{saving?'Saving...':'Save'}</button>
      </div>
    </div>
  );
}

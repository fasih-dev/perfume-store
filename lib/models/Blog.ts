import { Schema, model, models, Types } from 'mongoose';

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    content: { type: String, required: true },
    contentType: { type: String, enum: ['markdown', 'html'], default: 'markdown' },
    author: { type: Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['draft', 'published'], default: 'draft', index: true },
    publishedAt: { type: Date },
    featuredImage: { type: String },
    seoTitle: { type: String },
    seoDescription: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export const Blog = models.Blog || model('Blog', BlogSchema);

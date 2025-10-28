import { Schema, model, models, Types } from 'mongoose';

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, index: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String },
    price: { type: Number, required: true, min: 0 },
    category: { type: Types.ObjectId, ref: 'Category' },
    images: [{ type: String }],
    stock: { type: Number, default: 0, min: 0 },
    seoTitle: { type: String },
    seoDescription: { type: String },
    keywords: [{ type: String }],
    isFeatured: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
);

// Keep only the text index
ProductSchema.index({ name: 'text', description: 'text' });

export const Product = models.Product || model('Product', ProductSchema);

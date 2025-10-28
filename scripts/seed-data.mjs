import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });

const { MONGODB_URI, MONGODB_DB_NAME } = process.env;

const productSchema = new mongoose.Schema({
	name: String,
	slug: String,
	description: String,
	price: Number,
	images: [String],
	stock: Number,
	seoTitle: String,
	seoDescription: String,
	keywords: [String],
	isFeatured: Boolean,
}, { timestamps: true });

const blogSchema = new mongoose.Schema({
	title: String,
	slug: String,
	content: String,
	contentType: String,
	status: String,
	publishedAt: Date,
	featuredImage: String,
	seoTitle: String,
	seoDescription: String,
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

const products = [
	{
		name: 'Velvet Noir Eau de Parfum',
		slug: 'velvet-noir-eau-de-parfum',
		description: 'An intoxicating blend of dark vanilla, smoky oud, and warm amber. Velvet Noir captures the essence of midnight elegance with its rich, seductive aroma that lingers beautifully on the skin.',
		price: 129.99,
		images: ['https://picsum.photos/seed/velvet-noir/800/800'],
		stock: 45,
		seoTitle: 'Velvet Noir Eau de Parfum - Luxury Dark Vanilla & Oud Perfume',
		seoDescription: 'Experience the captivating allure of Velvet Noir, a luxury perfume featuring dark vanilla, smoky oud, and warm amber notes.',
		keywords: ['velvet noir', 'oud perfume', 'luxury fragrance', 'dark vanilla'],
		isFeatured: true,
	},
	{
		name: 'Rose Garden Morning',
		slug: 'rose-garden-morning',
		description: 'A delicate bouquet of fresh roses, peony, and jasmine with hints of citrus bergamot. Perfect for daily wear, this elegant fragrance evokes a peaceful morning in a blooming rose garden.',
		price: 89.99,
		images: ['https://picsum.photos/seed/rose-garden/800/800'],
		stock: 62,
		seoTitle: 'Rose Garden Morning - Fresh Floral Perfume for Women',
		seoDescription: 'A fresh floral fragrance with roses, peony, and jasmine notes. Ideal for daily wear and special occasions.',
		keywords: ['rose perfume', 'floral fragrance', 'jasmine', 'bergamot'],
		isFeatured: true,
	},
	{
		name: 'Ocean Breeze Cologne',
		slug: 'ocean-breeze-cologne',
		description: 'Clean, aquatic notes combined with sea salt, driftwood, and subtle citrus create a refreshing masculine scent reminiscent of coastal mornings and ocean waves.',
		price: 74.99,
		images: ['https://picsum.photos/seed/ocean-breeze/800/800'],
		stock: 38,
		seoTitle: 'Ocean Breeze Cologne - Fresh Aquatic Men\'s Fragrance',
		seoDescription: 'A refreshing cologne with aquatic notes, sea salt, and driftwood. Perfect for the modern man.',
		keywords: ['ocean cologne', 'aquatic fragrance', 'men perfume', 'fresh scent'],
		isFeatured: true,
	},
	{
		name: 'Amber Royale',
		slug: 'amber-royale',
		description: 'A regal composition of rich amber, sandalwood, and exotic spices. This oriental masterpiece exudes sophistication and warmth, perfect for evening wear and special occasions.',
		price: 159.99,
		images: ['https://picsum.photos/seed/amber-royale/800/800'],
		stock: 28,
		seoTitle: 'Amber Royale - Oriental Luxury Perfume with Sandalwood',
		seoDescription: 'Experience royal elegance with Amber Royale, featuring rich amber, sandalwood, and exotic spices.',
		keywords: ['amber perfume', 'oriental fragrance', 'sandalwood', 'luxury scent'],
		isFeatured: true,
	},
	{
		name: 'Citrus Bloom',
		slug: 'citrus-bloom',
		description: 'A vibrant fusion of mandarin, lemon zest, and grapefruit balanced with white florals and soft musk. This uplifting scent energizes your day with its bright, cheerful character.',
		price: 64.99,
		images: ['https://picsum.photos/seed/citrus-bloom/800/800'],
		stock: 54,
		seoTitle: 'Citrus Bloom - Energizing Citrus & Floral Perfume',
		seoDescription: 'A vibrant citrus perfume with mandarin, lemon, and white florals for a fresh, uplifting experience.',
		keywords: ['citrus perfume', 'mandarin fragrance', 'fresh scent', 'energizing'],
		isFeatured: true,
	},
	{
		name: 'Midnight Leather',
		slug: 'midnight-leather',
		description: 'Bold and masculine with notes of leather, tobacco, and vetiver. A modern classic for the confident individual who appreciates depth and character in their signature scent.',
		price: 119.99,
		images: ['https://picsum.photos/seed/midnight-leather/800/800'],
		stock: 32,
		seoTitle: 'Midnight Leather - Bold Men\'s Cologne with Tobacco & Vetiver',
		seoDescription: 'A bold masculine fragrance featuring leather, tobacco, and vetiver notes for the modern man.',
		keywords: ['leather cologne', 'tobacco fragrance', 'masculine scent', 'vetiver'],
		isFeatured: true,
	},
];

const blogs = [
	{
		title: 'The Art of Choosing Your Signature Scent',
		slug: 'art-of-choosing-signature-scent',
		content: `# The Art of Choosing Your Signature Scent

Finding your perfect fragrance is a deeply personal journey. Your signature scent becomes part of your identity, leaving a lasting impression wherever you go.

## Understanding Fragrance Notes

Perfumes are composed of three layers:
- **Top Notes**: The initial scent you smell (citrus, herbs)
- **Heart Notes**: The core of the fragrance (florals, spices)
- **Base Notes**: The lasting impression (woods, musks, vanilla)

## Tips for Choosing

1. **Test on Your Skin**: Fragrances interact with your body chemistry
2. **Give It Time**: Wait 30 minutes to experience the full development
3. **Consider the Occasion**: Light for day, rich for evening
4. **Trust Your Instincts**: Choose what makes you feel confident

Your signature scent should resonate with your personality and lifestyle.`,
		contentType: 'markdown',
		status: 'published',
		publishedAt: new Date('2024-01-15'),
		featuredImage: 'https://picsum.photos/seed/blog-1/1200/700',
		seoTitle: 'How to Choose Your Perfect Signature Scent - Expert Guide',
		seoDescription: 'Learn the art of selecting your ideal perfume with our comprehensive guide to fragrance notes, testing, and finding your signature scent.',
	},
	{
		title: '5 Fragrance Layering Techniques for Lasting Scent',
		slug: 'fragrance-layering-techniques',
		content: `# 5 Fragrance Layering Techniques for Lasting Scent

Maximize your perfume's longevity and create unique combinations with these professional layering techniques.

## 1. Start with Moisturized Skin
Apply unscented lotion before perfume. Hydrated skin holds fragrance longer.

## 2. Layer Complementary Scents
Combine products from the same fragrance family for depth without clash.

## 3. Apply to Pulse Points
Wrists, neck, behind ears - these warm spots diffuse scent naturally.

## 4. Hair Perfuming
Spray on your brush before styling for a subtle, long-lasting effect.

## 5. Clothing Strategy
Light spray on fabrics extends wear time significantly.

Master these techniques to make your favorite scents last all day!`,
		contentType: 'markdown',
		status: 'published',
		publishedAt: new Date('2024-01-20'),
		featuredImage: 'https://picsum.photos/seed/blog-2/1200/700',
		seoTitle: 'Perfume Layering Techniques - Make Your Fragrance Last Longer',
		seoDescription: 'Discover 5 expert techniques for layering fragrances to create lasting, unique scents that complement your style.',
	},
	{
		title: 'Seasonal Scents: Choosing Fragrances for Every Season',
		slug: 'seasonal-scents-guide',
		content: `# Seasonal Scents: Choosing Fragrances for Every Season

Just as your wardrobe changes with the seasons, so should your fragrance. Here's your guide to seasonal scent selection.

## Spring: Fresh & Floral
Light florals, green notes, and citrus capture spring's renewal. Think rose, lily, and fresh-cut grass.

## Summer: Aquatic & Citrus
Bright, refreshing scents withstand heat. Ocean notes, bergamot, and light musks work beautifully.

## Autumn: Warm & Spicy
As leaves turn, embrace amber, cinnamon, and woody notes that evoke cozy evenings.

## Winter: Rich & Intense
Deep, long-lasting fragrances like oud, vanilla, and leather complement cold weather perfectly.

Rotate your collection seasonally for the perfect olfactory experience year-round.`,
		contentType: 'markdown',
		status: 'published',
		publishedAt: new Date('2024-01-25'),
		featuredImage: 'https://picsum.photos/seed/blog-3/1200/700',
		seoTitle: 'Best Seasonal Fragrances - Perfume Guide for Every Season',
		seoDescription: 'Learn which perfumes work best for spring, summer, autumn, and winter with our complete seasonal fragrance guide.',
	},
];

async function seedData() {
	try {
		await mongoose.connect(MONGODB_URI, { dbName: MONGODB_DB_NAME });
		console.log('Connected to MongoDB');

		// Clear existing data
		await Product.deleteMany({});
		await Blog.deleteMany({});
		console.log('Cleared existing data');

		// Insert products
		await Product.insertMany(products);
		console.log(`Inserted ${products.length} products`);

		// Insert blogs
		await Blog.insertMany(blogs);
		console.log(`Inserted ${blogs.length} blogs`);

		console.log('✅ Seed data completed successfully!');
		await mongoose.disconnect();
		process.exit(0);
	} catch (error) {
		console.error('Error seeding data:', error);
		process.exit(1);
	}
}

seedData();


import Link from "next/link";
import Image from "next/image";
import { connectToDatabase } from "@/lib/mongodb";
import { Product } from "@/lib/models/Product";
import { Blog } from "@/lib/models/Blog";

export const metadata = {
	title: "Luxury Perfumes | Premium Fragrances",
	description: "Discover our curated collection of luxury perfumes and fragrances. Find your signature scent from our exclusive range of premium perfumes.",
};

export default async function Home() {
	await connectToDatabase();
	const [featuredProducts, latestBlogs] = await Promise.all([
		Product.find({ isFeatured: true }).limit(6).lean(),
		Blog.find({ status: 'published' }).sort({ publishedAt: -1 }).limit(3).lean(),
	]);

  return (
		<div className="bg-white">
			{/* Hero Section - Enhanced with overlay pattern */}
			<section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
				{/* Animated background pattern */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
				</div>
				
				<div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
					<div className="max-w-4xl mx-auto text-center">
						<div className="mb-6 inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
							✨ New Collection 2025
						</div>
						<h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
							Discover Your
							<span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
								Signature Scent
							</span>
						</h1>
						<p className="text-xl md:text-2xl mb-10 text-purple-100 leading-relaxed max-w-3xl mx-auto">
							Immerse yourself in a world of luxury fragrances, where every bottle tells a unique story and every scent creates lasting memories.
						</p>
						<div className="flex flex-wrap gap-4 justify-center">
							<Link 
								href="/products" 
								className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-purple-900 hover:bg-purple-50 font-bold rounded-full shadow-2xl transition-all transform hover:scale-105 hover:shadow-purple-500/50"
							>
								Explore Collection
								<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</Link>
							<Link 
								href="/blogs" 
								className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/30 transition-all hover:border-white/50"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
								Fragrance Guide
							</Link>
						</div>
						
						{/* Stats */}
						<div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
							<div className="text-center">
								<div className="text-4xl font-bold mb-2">500+</div>
								<div className="text-purple-200 text-sm">Premium Fragrances</div>
							</div>
							<div className="text-center">
								<div className="text-4xl font-bold mb-2">50K+</div>
								<div className="text-purple-200 text-sm">Happy Customers</div>
							</div>
							<div className="text-center">
								<div className="text-4xl font-bold mb-2">4.9★</div>
								<div className="text-purple-200 text-sm">Average Rating</div>
							</div>
						</div>
					</div>
				</div>
				
				{/* Wave separator */}
				<div className="absolute bottom-0 left-0 right-0">
					<svg className="w-full h-24 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
					</svg>
				</div>
			</section>

			{/* Trust Badges */}
			<section className="bg-gradient-to-r from-purple-50 via-white to-purple-50 py-12 border-y border-purple-100">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
						<div className="flex items-center gap-3 justify-center">
							<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
								<svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<div>
								<div className="font-bold text-gray-900 text-sm">100% Authentic</div>
								<div className="text-xs text-gray-500">Guaranteed Genuine</div>
							</div>
						</div>
						<div className="flex items-center gap-3 justify-center">
							<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
								<svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
								</svg>
							</div>
							<div>
								<div className="font-bold text-gray-900 text-sm">Secure Payment</div>
								<div className="text-xs text-gray-500">SSL Protected</div>
							</div>
						</div>
						<div className="flex items-center gap-3 justify-center">
							<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
								<svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<div>
								<div className="font-bold text-gray-900 text-sm">Fast Shipping</div>
								<div className="text-xs text-gray-500">2-3 Day Delivery</div>
							</div>
						</div>
						<div className="flex items-center gap-3 justify-center">
							<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
								<svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
								</svg>
							</div>
							<div>
								<div className="font-bold text-gray-900 text-sm">Easy Returns</div>
								<div className="text-xs text-gray-500">30-Day Policy</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Products */}
			<section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
				<div className="text-center mb-16">
					<div className="inline-block mb-4 px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
						Featured Collection
					</div>
					<h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Signature Fragrances
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Handpicked perfumes that define elegance, sophistication, and timeless beauty. Each scent is a masterpiece crafted by world-renowned perfumers.
					</p>
				</div>
				
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuredProducts.map((p: any) => (
						<Link 
							key={p._id} 
							href={`/products/${p.slug}`} 
							className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-gray-100"
						>
							<div className="relative aspect-square bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 overflow-hidden">
								{p.images?.[0] && (
									<Image
										src={p.images[0]} 
										alt={p.name} 
										fill 
										sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" 
										className="object-cover group-hover:scale-110 transition-transform duration-700" 
									/>
								)}
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl">
									${(p.price || 0).toFixed(2)}
								</div>
								<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
									<div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 text-xs text-gray-700 font-medium">
										Click to explore
									</div>
								</div>
							</div>
							<div className="p-7">
								<h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
									{p.name}
								</h3>
								<p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">{p.description}</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
										<span>View Details</span>
										<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</div>
									<div className="flex gap-1">
										{[...Array(5)].map((_, i) => (
											<svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
												<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
											</svg>
										))}
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>

				<div className="text-center mt-16">
					<Link 
						href="/products" 
						className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
					>
						View All Fragrances
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</Link>
				</div>
			</section>

			{/* Customer Testimonials */}
			<section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20 md:py-28">
				<div className="mx-auto max-w-7xl px-6">
					<div className="text-center mb-16">
						<div className="inline-block mb-4 px-4 py-1 bg-white/10 backdrop-blur-sm text-purple-200 rounded-full text-sm font-semibold border border-white/20">
							Customer Stories
						</div>
						<h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
							What Our Clients Say
						</h2>
						<p className="text-xl text-purple-100 max-w-3xl mx-auto">
							Join thousands of satisfied customers who found their perfect fragrance
						</p>
					</div>
					
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								name: "Sarah Mitchell",
								role: "Fashion Designer",
								image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
								quote: "The quality is exceptional! I found my signature scent here, and I receive compliments everywhere I go. The customer service is outstanding.",
								rating: 5
							},
							{
								name: "Michael Chen",
								role: "Business Executive",
								image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
								quote: "Fast shipping, authentic products, and excellent prices. This is now my go-to store for all my fragrance needs. Highly recommended!",
								rating: 5
							},
							{
								name: "Emma Rodriguez",
								role: "Beauty Influencer",
								image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
								quote: "As someone who reviews perfumes professionally, I can confidently say this store offers genuine luxury fragrances at competitive prices.",
								rating: 5
							}
						].map((testimonial, idx) => (
							<div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
								<div className="flex gap-1 mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
											<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
										</svg>
									))}
								</div>
								<p className="text-purple-50 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-full bg-purple-300 overflow-hidden">
										<Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="object-cover" />
									</div>
									<div>
										<div className="font-bold text-white">{testimonial.name}</div>
										<div className="text-sm text-purple-200">{testimonial.role}</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
				<div className="text-center mb-16">
					<div className="inline-block mb-4 px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
						Our Promise
					</div>
					<h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Why Choose Us
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Experience the difference with our commitment to quality and service
					</p>
				</div>
				
				<div className="grid md:grid-cols-3 gap-10">
					{[
						{
							icon: (
								<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							),
							title: "100% Authentic Guarantee",
							description: "Every perfume is sourced directly from authorized distributors. We guarantee authenticity with verifiable certificates for peace of mind."
						},
						{
							icon: (
								<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							),
							title: "Lightning-Fast Delivery",
							description: "Express shipping ensures your order arrives within 2-3 business days. Premium packaging protects your fragrance during transit."
						},
						{
							icon: (
								<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
							),
							title: "Expert Curation",
							description: "Our perfume specialists handpick every fragrance. From classic favorites to rare discoveries, we offer only the finest selections."
						}
					].map((feature, idx) => (
						<div key={idx} className="group text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 border border-purple-100">
							<div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
								{feature.icon}
							</div>
							<h3 className="font-serif text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
							<p className="text-gray-600 leading-relaxed">{feature.description}</p>
						</div>
					))}
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white py-20">
				<div className="mx-auto max-w-4xl px-6 text-center">
					<div className="mb-6">
						<svg className="w-16 h-16 mx-auto mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</div>
					<h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
						Join Our Fragrance Club
					</h2>
					<p className="text-xl mb-10 text-purple-50 max-w-2xl mx-auto leading-relaxed">
						Subscribe to receive exclusive offers, new arrival alerts, and expert perfume tips delivered to your inbox.
					</p>
					<form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
						<input 
							type="email" 
							placeholder="Enter your email address" 
							className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
							required
						/>
						<button 
							type="submit" 
							className="px-8 py-4 bg-white text-purple-600 hover:bg-purple-50 font-bold rounded-full shadow-lg transition-all transform hover:scale-105"
						>
							Subscribe Now
						</button>
					</form>
					<p className="mt-6 text-sm text-purple-100">
						🎁 Get 15% off your first order when you subscribe
					</p>
				</div>
			</section>

			{/* Latest Blog Articles */}
			<section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
				<div className="text-center mb-16">
					<div className="inline-block mb-4 px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
						From Our Blog
					</div>
					<h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Fragrance Journal
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Expert insights, tips, and stories from the enchanting world of perfumery
					</p>
				</div>
				
				<div className="grid md:grid-cols-3 gap-10">
					{latestBlogs.map((b: any) => (
						<Link 
							key={b._id} 
							href={`/blogs/${b.slug}`} 
							className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
						>
							{b.featuredImage && (
								<div className="relative aspect-[4/3] bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
									<Image
										src={b.featuredImage} 
										alt={b.title} 
										fill 
										sizes="(max-width:768px) 100vw, 33vw" 
										className="object-cover group-hover:scale-110 transition-transform duration-700" 
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
							)}
							<div className="p-8">
								<div className="flex items-center gap-2 text-sm text-purple-600 font-semibold mb-3">
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
									</svg>
									<span>3 min read</span>
								</div>
								<h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors line-clamp-2 leading-tight">
									{b.title}
								</h3>
								<div className="flex items-center justify-between">
									<span className="text-purple-600 font-semibold text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
										Read Article
										<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>

				<div className="text-center mt-16">
					<Link 
						href="/blogs" 
						className="inline-flex items-center gap-2 px-10 py-4 border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-600 hover:text-white transition-all shadow-md hover:shadow-lg transform hover:scale-105"
					>
						Explore All Articles
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</Link>
				</div>
			</section>
		</div>
  );
}
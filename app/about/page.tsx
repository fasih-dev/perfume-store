export const metadata = {
	title: 'About Us',
	description: 'Learn about Perfume Store, our commitment to luxury fragrances, and our passion for helping you find your perfect scent.',
};

export default function AboutPage() {
	return (
		<div className="bg-gray-50 min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
				<div className="mx-auto max-w-7xl px-6">
					<h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Perfume Store</h1>
					<p className="text-xl text-primary-100 max-w-3xl">
						Curating exceptional fragrances and helping you discover scents that define your unique identity.
					</p>
				</div>
			</section>

			{/* Our Story */}
			<section className="mx-auto max-w-7xl px-6 py-16">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
						<div className="space-y-4 text-gray-700 leading-relaxed">
							<p>
								Founded with a passion for exceptional fragrances, Perfume Store has become a trusted destination for perfume enthusiasts seeking authentic luxury scents. Our journey began with a simple belief: everyone deserves to find a signature scent that resonates with their personality and style.
							</p>
							<p>
								What started as a small collection has grown into a carefully curated selection of premium fragrances from renowned perfume houses around the world. We work directly with authorized distributors to ensure every bottle we offer is 100% authentic.
							</p>
							<p>
								Today, we're proud to serve thousands of customers who trust us for quality, authenticity, and exceptional service. Our commitment to excellence extends beyond products—we're here to educate, inspire, and guide you on your fragrance journey.
							</p>
						</div>
					</div>
					<div className="bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
						<div className="text-center">
							<div className="text-6xl mb-4">✨</div>
							<p className="font-serif text-2xl font-bold text-primary-900">Since 2020</p>
							<p className="text-gray-700 mt-2">Delivering Luxury Fragrances</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our Values */}
			<section className="bg-white py-16">
				<div className="mx-auto max-w-7xl px-6">
					<h2 className="font-serif text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Authenticity</h3>
							<p className="text-gray-600">
								We guarantee 100% genuine fragrances sourced directly from authorized distributors. No imitations, ever.
							</p>
						</div>

						<div className="text-center">
							<div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Expertise</h3>
							<p className="text-gray-600">
								Our team of fragrance experts is here to guide you in discovering scents that perfectly match your preferences.
							</p>
						</div>

						<div className="text-center">
							<div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
							</div>
							<h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Customer Care</h3>
							<p className="text-gray-600">
								Your satisfaction is our priority. We're committed to providing exceptional service at every step of your journey.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="mx-auto max-w-7xl px-6 py-16">
				<h2 className="font-serif text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Perfume Store</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="bg-white rounded-xl shadow-md p-6">
						<div className="flex items-start gap-4">
							<div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
								<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">Curated Selection</h3>
								<p className="text-gray-600">Handpicked fragrances from world-renowned perfume houses, carefully selected for quality and uniqueness.</p>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-xl shadow-md p-6">
						<div className="flex items-start gap-4">
							<div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
								<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">Fast Shipping</h3>
								<p className="text-gray-600">Quick and secure delivery to your doorstep with tracking, so your fragrances arrive safely and promptly.</p>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-xl shadow-md p-6">
						<div className="flex items-start gap-4">
							<div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
								<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">Secure Shopping</h3>
								<p className="text-gray-600">Your payment and personal information are protected with industry-standard encryption and security measures.</p>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-xl shadow-md p-6">
						<div className="flex items-start gap-4">
							<div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
								<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
								</svg>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">Expert Guidance</h3>
								<p className="text-gray-600">Our fragrance consultants are available to help you find the perfect scent for any occasion or preference.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
				<div className="mx-auto max-w-4xl px-6 text-center">
					<h2 className="font-serif text-3xl font-bold mb-4">Ready to Find Your Signature Scent?</h2>
					<p className="text-xl text-primary-100 mb-8">
						Explore our curated collection of luxury fragrances and discover the perfect scent for you.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<a 
							href="/products" 
							className="px-8 py-3 bg-white text-primary-700 hover:bg-gray-100 font-semibold rounded-lg shadow-lg transition-colors"
						>
							Shop Now
						</a>
						<a 
							href="/contact" 
							className="px-8 py-3 bg-primary-700/50 hover:bg-primary-700/70 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 transition-colors"
						>
							Contact Us
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

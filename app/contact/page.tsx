"use client";
import { useState } from 'react';

export default function ContactPage() {
	const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 3000);
	};

	return (
		<div className="bg-gray-50 min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
				<div className="mx-auto max-w-7xl px-6">
					<h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
					<p className="text-xl text-primary-100 max-w-2xl">
						Have a question about our fragrances? We'd love to hear from you.
					</p>
				</div>
			</section>

			<div className="mx-auto max-w-7xl px-6 py-16">
				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div className="bg-white rounded-xl shadow-lg p-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
						
						{submitted && (
							<div className="mb-6 p-4 bg-accent-100 text-accent-800 rounded-lg">
								Thank you! Your message has been sent successfully.
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
									Full Name
								</label>
								<input
									type="text"
									id="name"
									required
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
									placeholder="John Doe"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
									Email Address
								</label>
								<input
									type="email"
									id="email"
									required
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
									placeholder="john@example.com"
								/>
							</div>

							<div>
								<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
									Subject
								</label>
								<input
									type="text"
									id="subject"
									required
									value={formData.subject}
									onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
									placeholder="Product inquiry"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
									Message
								</label>
								<textarea
									id="message"
									required
									rows={5}
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
									placeholder="Tell us how we can help..."
								/>
							</div>

							<button
								type="submit"
								className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md transition-colors"
							>
								Send Message
							</button>
						</form>
					</div>

					{/* Contact Information */}
					<div className="space-y-8">
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">Email</h3>
										<p className="text-gray-600">support@perfumestore.com</p>
										<p className="text-gray-600">sales@perfumestore.com</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
										</svg>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
										<p className="text-gray-600">+1 (555) 123-4567</p>
										<p className="text-gray-600 text-sm">Mon-Fri: 9AM - 6PM EST</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">Address</h3>
										<p className="text-gray-600">123 Fragrance Avenue</p>
										<p className="text-gray-600">New York, NY 10001</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-primary-600 rounded-xl shadow-lg p-8 text-white">
							<h2 className="font-serif text-2xl font-bold mb-4">Business Hours</h2>
							<div className="space-y-3">
								<div className="flex justify-between">
									<span>Monday - Friday</span>
									<span className="font-semibold">9:00 AM - 6:00 PM</span>
								</div>
								<div className="flex justify-between">
									<span>Saturday</span>
									<span className="font-semibold">10:00 AM - 4:00 PM</span>
								</div>
								<div className="flex justify-between">
									<span>Sunday</span>
									<span className="font-semibold">Closed</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="mt-16 bg-white rounded-xl shadow-lg p-8">
					<h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="font-semibold text-gray-900 mb-2">How long does shipping take?</h3>
							<p className="text-gray-600">Standard shipping typically takes 3-5 business days. Express shipping is available for 1-2 day delivery.</p>
						</div>
						<div>
							<h3 className="font-semibold text-gray-900 mb-2">Do you ship internationally?</h3>
							<p className="text-gray-600">Yes, we ship to over 50 countries worldwide. International shipping times vary by location.</p>
						</div>
						<div>
							<h3 className="font-semibold text-gray-900 mb-2">What is your return policy?</h3>
							<p className="text-gray-600">We offer a 30-day return policy on unopened items. Please see our Terms & Conditions for details.</p>
						</div>
						<div>
							<h3 className="font-semibold text-gray-900 mb-2">Are your perfumes authentic?</h3>
							<p className="text-gray-600">Yes, we guarantee 100% authentic fragrances sourced directly from authorized distributors.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

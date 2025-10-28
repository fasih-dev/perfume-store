export const metadata = { 
	title: 'Terms & Conditions', 
	description: 'Read our terms and conditions for using Perfume Store and purchasing our luxury fragrances.' 
};

export default function TermsPage() {
	return (
		<div className="bg-gray-50 min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
				<div className="mx-auto max-w-7xl px-6">
					<h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
					<p className="text-xl text-primary-100 max-w-3xl">
						Please read these terms carefully before using our services or making a purchase.
					</p>
					<p className="text-sm text-primary-200 mt-4">Last updated: January 2024</p>
				</div>
			</section>

			<div className="mx-auto max-w-4xl px-6 py-16">
				<div className="bg-white rounded-xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
					
					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
						<p className="text-gray-700 leading-relaxed">
							By accessing and using Perfume Store's website and services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							Permission is granted to temporarily access the materials on Perfume Store's website for personal, non-commercial transitory viewing only. This license does not include:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							<li>Modifying or copying the materials</li>
							<li>Using the materials for commercial purposes</li>
							<li>Attempting to reverse engineer any software on the website</li>
							<li>Removing copyright or proprietary notations from materials</li>
							<li>Transferring the materials to another person or mirroring the materials on any other server</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">3. Product Information and Availability</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							We strive to provide accurate product descriptions, images, and pricing. However:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							<li>Product images are for illustrative purposes and may vary slightly from actual products</li>
							<li>We do not warrant that product descriptions are accurate, complete, reliable, or error-free</li>
							<li>Prices are subject to change without notice</li>
							<li>We reserve the right to limit quantities or discontinue products</li>
							<li>Products are subject to availability</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">4. Orders and Payment</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							When you place an order, you agree to the following:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							<li>You are legally capable of entering into binding contracts</li>
							<li>All information provided is accurate and current</li>
							<li>You authorize us to charge your payment method for the total amount</li>
							<li>We reserve the right to refuse or cancel orders for any reason</li>
							<li>Payment must be received before order fulfillment</li>
							<li>We accept major credit cards, debit cards, and other payment methods as indicated</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">5. Shipping and Delivery</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							Shipping terms and conditions:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							<li>Shipping times are estimates and not guaranteed</li>
							<li>Delivery delays due to carrier issues are beyond our control</li>
							<li>You are responsible for providing accurate shipping addresses</li>
							<li>Risk of loss passes to you upon delivery to the carrier</li>
							<li>International orders may be subject to customs fees and import duties</li>
							<li>Shipping costs are calculated at checkout and are non-refundable</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">6. Returns and Refunds</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							Our return policy includes:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							<li><strong>30-Day Return Window:</strong> Eligible returns must be initiated within 30 days of delivery</li>
							<li><strong>Unopened Products:</strong> Products must be unopened and in original packaging</li>
							<li><strong>Proof of Purchase:</strong> Original receipt or order confirmation required</li>
							<li><strong>Return Shipping:</strong> Customer is responsible for return shipping costs unless item is defective</li>
							<li><strong>Refund Processing:</strong> Refunds will be issued to the original payment method within 7-10 business days</li>
							<li><strong>Non-Returnable Items:</strong> Sale items, gift cards, and opened perfumes cannot be returned</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">7. User Accounts</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							If you create an account on our website:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							<li>You are responsible for maintaining the confidentiality of your account credentials</li>
							<li>You are responsible for all activities that occur under your account</li>
							<li>You must notify us immediately of any unauthorized use</li>
							<li>We reserve the right to suspend or terminate accounts for violations</li>
							<li>You may not use another user's account without permission</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
						<p className="text-gray-700 leading-relaxed">
							All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Perfume Store or its content suppliers and is protected by international copyright laws. Unauthorized use of any materials may violate copyright, trademark, and other laws.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
						<p className="text-gray-700 leading-relaxed">
							To the fullest extent permitted by law, Perfume Store shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses resulting from your use of our services or products.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">10. Disclaimer</h2>
						<p className="text-gray-700 leading-relaxed">
							The materials on Perfume Store's website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
						<p className="text-gray-700 leading-relaxed">
							These terms and conditions are governed by and construed in accordance with the laws of the State of New York, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
						<p className="text-gray-700 leading-relaxed">
							We reserve the right to revise these Terms and Conditions at any time. By continuing to use this website after changes are posted, you agree to be bound by the revised terms.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							If you have questions about these Terms and Conditions, please contact us:
						</p>
						<div className="bg-gray-50 p-6 rounded-lg">
							<p className="text-gray-700"><strong>Email:</strong> <a href="mailto:legal@perfumestore.com" className="text-primary-600 hover:underline">legal@perfumestore.com</a></p>
							<p className="text-gray-700 mt-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
							<p className="text-gray-700 mt-2"><strong>Mail:</strong> Perfume Store, 123 Fragrance Avenue, New York, NY 10001</p>
						</div>
					</section>

					<div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mt-8">
						<p className="text-gray-700">
							<strong className="text-primary-700">Important:</strong> By making a purchase or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
						</p>
					</div>

				</div>
			</div>
		</div>
	);
}

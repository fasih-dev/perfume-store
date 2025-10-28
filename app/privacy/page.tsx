export const metadata = { 
	title: 'Privacy Policy', 
	description: 'Learn how we collect, use, and protect your personal information at Perfume Store.' 
};

export default function PrivacyPage() {
	return (
		<div className="bg-gray-50 min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
				<div className="mx-auto max-w-7xl px-6">
					<h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
					<p className="text-xl text-primary-100 max-w-3xl">
						Your privacy is important to us. Learn how we protect and handle your personal information.
					</p>
					<p className="text-sm text-primary-200 mt-4">Last updated: January 2024</p>
				</div>
			</section>

			<div className="mx-auto max-w-4xl px-6 py-16">
				<div className="bg-white rounded-xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
					
					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							We collect information that you provide directly to us, including:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							<li><strong>Personal Information:</strong> Name, email address, phone number, shipping and billing addresses</li>
							<li><strong>Account Information:</strong> Username, password, and preferences</li>
							<li><strong>Payment Information:</strong> Credit card details, billing information (processed securely through our payment providers)</li>
							<li><strong>Communication Data:</strong> Messages, feedback, and customer support inquiries</li>
							<li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages, and referral sources</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							We use the information we collect for the following purposes:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							<li>Processing and fulfilling your orders</li>
							<li>Communicating with you about your orders and account</li>
							<li>Sending promotional emails and newsletters (with your consent)</li>
							<li>Improving our website, products, and services</li>
							<li>Personalizing your shopping experience</li>
							<li>Preventing fraud and maintaining security</li>
							<li>Complying with legal obligations</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							We do not sell, rent, or share your personal information with third parties except in the following circumstances:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							<li><strong>Service Providers:</strong> We share information with vendors who help us operate our business (payment processors, shipping companies, email services)</li>
							<li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
							<li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
							<li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings. The types of cookies we use include:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							<li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
							<li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
							<li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
							<li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
						<p className="text-gray-700 leading-relaxed">
							We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
							<li>SSL/TLS encryption for data transmission</li>
							<li>Secure payment processing through PCI-DSS compliant providers</li>
							<li>Regular security audits and vulnerability assessments</li>
							<li>Access controls and authentication measures</li>
							<li>Employee training on data protection practices</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							You have the following rights regarding your personal information:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							<li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
							<li><strong>Correction:</strong> Update or correct inaccurate information</li>
							<li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
							<li><strong>Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
							<li><strong>Data Portability:</strong> Request your data in a portable format</li>
							<li><strong>Objection:</strong> Object to certain processing of your data</li>
						</ul>
						<p className="text-gray-700 leading-relaxed mt-4">
							To exercise these rights, please contact us at <a href="mailto:privacy@perfumestore.com" className="text-primary-600 hover:underline">privacy@perfumestore.com</a>.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
						<p className="text-gray-700 leading-relaxed">
							Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
						<p className="text-gray-700 leading-relaxed">
							Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
						<p className="text-gray-700 leading-relaxed">
							We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
						</p>
						<div className="bg-gray-50 p-6 rounded-lg">
							<p className="text-gray-700"><strong>Email:</strong> <a href="mailto:privacy@perfumestore.com" className="text-primary-600 hover:underline">privacy@perfumestore.com</a></p>
							<p className="text-gray-700 mt-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
							<p className="text-gray-700 mt-2"><strong>Mail:</strong> Perfume Store, 123 Fragrance Avenue, New York, NY 10001</p>
						</div>
					</section>

				</div>
			</div>
		</div>
	);
}

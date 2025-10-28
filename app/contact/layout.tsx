import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Us',
	description: 'Get in touch with our team for inquiries about luxury perfumes, orders, and customer support.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}


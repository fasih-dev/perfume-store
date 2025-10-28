'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
});

function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Mobile Menu Button */}
			<button 
				onClick={() => setIsOpen(!isOpen)}
				className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
				aria-label="Toggle menu"
			>
				{isOpen ? (
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				) : (
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				)}
			</button>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<div 
					className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Mobile Menu Panel */}
			<div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
				<div className="p-6">
					<div className="flex items-center justify-between mb-8">
						<Link href="/" className="font-serif text-2xl font-bold text-purple-700" onClick={() => setIsOpen(false)}>
							✨ Perfume Store
						</Link>
						<button 
							onClick={() => setIsOpen(false)}
							className="p-2 text-gray-500 hover:text-purple-600 transition-colors"
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					
					<nav className="space-y-4">
						<Link 
							href="/products" 
							className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-semibold"
							onClick={() => setIsOpen(false)}
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
							</svg>
							Fragrances
						</Link>
						<Link 
							href="/blogs" 
							className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-semibold"
							onClick={() => setIsOpen(false)}
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
							</svg>
							Journal
						</Link>
						<Link 
							href="/about" 
							className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-semibold"
							onClick={() => setIsOpen(false)}
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							About
						</Link>
						<Link 
							href="/contact" 
							className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all font-semibold"
							onClick={() => setIsOpen(false)}
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							Contact
						</Link>
						<div className="pt-4 border-t border-gray-200">
							<Link 
								href="/admin/login" 
								className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all font-semibold shadow-lg"
								onClick={() => setIsOpen(false)}
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
								</svg>
								Admin Login
							</Link>
						</div>
					</nav>

					{/* Mobile Social Links */}
					<div className="mt-8 pt-6 border-t border-gray-200">
						<p className="text-sm text-gray-500 mb-4 font-semibold">Follow Us</p>
						<div className="flex gap-3">
							<a href="#" className="w-10 h-10 bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white rounded-full flex items-center justify-center transition-all">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
								</svg>
							</a>
							<a href="#" className="w-10 h-10 bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white rounded-full flex items-center justify-center transition-all">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
								</svg>
							</a>
							<a href="#" className="w-10 h-10 bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white rounded-full flex items-center justify-center transition-all">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function LayoutContent({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const isAdminRoute = pathname?.startsWith('/admin');

  return (
		<>
			{/* Only show header for non-admin routes */}
			{!isAdminRoute && (
				<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
					<div className="mx-auto max-w-7xl px-6 py-4">
						<div className="flex items-center justify-between">
							<Link href="/" className="font-serif text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700 transition-all">
								✨ Perfume Store
							</Link>
							
							{/* Desktop Navigation */}
							<nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
								<Link href="/products" className="text-gray-700 hover:text-purple-600 transition-colors relative group">
									Fragrances
									<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
								</Link>
								<Link href="/blogs" className="text-gray-700 hover:text-purple-600 transition-colors relative group">
									Journal
									<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
								</Link>
								<Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors relative group">
									About
									<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
								</Link>
								<Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors relative group">
									Contact
									<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
								</Link>
								<Link 
									href="/admin/login" 
									className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-105"
								>
									Admin
								</Link>
							</nav>
							
							{/* Mobile Menu Component */}
							<MobileMenu />
						</div>
					</div>
				</header>
			)}
			
			<main className={!isAdminRoute ? "" : "min-h-screen"}>
				{children}
			</main>
			
			{/* Only show footer for non-admin routes */}
			{!isAdminRoute && (
				<footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white mt-20">
					<div className="mx-auto max-w-7xl px-6 py-16">
						<div className="grid md:grid-cols-4 gap-12 mb-12">
							<div>
								<h3 className="font-serif text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
									Perfume Store
								</h3>
								<p className="text-gray-300 text-sm leading-relaxed mb-6">
									Your destination for authentic luxury fragrances and expert perfume guidance. Discover your signature scent today.
								</p>
								<div className="flex gap-3">
									<a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
										</svg>
									</a>
									<a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
										</svg>
									</a>
									<a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
										</svg>
									</a>
									<a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
										</svg>
									</a>
								</div>
							</div>
							<div>
								<h4 className="font-semibold mb-6 text-purple-300 text-lg">Quick Links</h4>
								<nav className="space-y-3 text-sm">
									<Link href="/products" className="block text-gray-300 hover:text-purple-300 transition-colors hover:translate-x-1 transform duration-200">
										All Fragrances
									</Link>
									<Link href="/products" className="block text-gray-300 hover:text-purple-300 transition-colors hover:translate-x-1 transform duration-200">
										New Arrivals
									</Link>
									<Link href="/products" className="block text-gray-300 hover:text-purple-300 transition-colors hover:translate-x-1 transform duration-200">
										Best Sellers
									</Link>
									<Link href="/products" className="block text-gray-300 hover:text-purple-300 transition-colors hover:translate-x-1 transform duration-200">
										Limited Editions
									</Link>
								</nav>
							</div>
							<div>
								<h4 className="font-semibold mb-6 text-purple-300 text-lg">Resources</h4>
								<nav className="space-y-3 text-sm">
									<Link href="/blogs" className="block text-gray-300 hover:text-purple-300 transition-colors hover:translate-x-1 transform duration-200">
										Fragrance Guide
									</Link>
									<Link href="/about" className="block text-gray-300 hover:text-purple-300 transition-colors hover:translate-x-1 transform duration-200">
										About Us
									</Link>
									<Link href="/contact" className="block text-gray-300 hover:text-purple-300 transition-colors hover:translate-x-1 transform duration-200">
										Contact Support
									</Link>
									<Link href="/blogs" className="block text-gray-300 hover:text-purple-300 transition-colors hover:translate-x-1 transform duration-200">
										FAQs
									</Link>
								</nav>
							</div>
							<div>
								<h4 className="font-semibold mb-6 text-purple-300 text-lg">Legal</h4>
								<nav className="space-y-3 text-sm mb-6">
									<Link href="/privacy" className="block text-gray-300 hover:text-purple-300 transition-colors hover:translate-x-1 transform duration-200">
										Privacy Policy
									</Link>
									<Link href="/terms" className="block text-gray-300 hover:text-purple-300 transition-colors hover:translate-x-1 transform duration-200">
										Terms & Conditions
									</Link>
									<Link href="/contact" className="block text-gray-300 hover:text-purple-300 transition-colors hover:translate-x-1 transform duration-200">
										Shipping Policy
									</Link>
									<Link href="/contact" className="block text-gray-300 hover:text-purple-300 transition-colors hover:translate-x-1 transform duration-200">
										Return Policy
									</Link>
								</nav>
							</div>
						</div>
						
						<div className="border-t border-gray-700/50 pt-8">
							<div className="flex flex-col md:flex-row justify-between items-center gap-4">
								<p className="text-sm text-gray-400">
									© {new Date().getFullYear()} Perfume Store. All rights reserved. Crafted with 💜
								</p>
								<div className="flex items-center gap-6 text-sm text-gray-400">
									<div className="flex items-center gap-2">
										<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
										</svg>
										<span>Secure Shopping</span>
									</div>
									<div className="flex items-center gap-2">
										<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
										</svg>
										<span>Trusted Payments</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			)}
		</>
	);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
			<head>
				<title>Perfume Store - Luxury Fragrances</title>
				<meta name="description" content="Discover luxury perfumes and fragrances. Shop our curated collection of premium scents." />
			</head>
			<body className="antialiased bg-white text-gray-900">
				<LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
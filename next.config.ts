import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		unoptimized: true, // Disable image optimization to avoid timeouts with external images
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'picsum.photos',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;

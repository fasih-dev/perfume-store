export function jsonLdScript(json: Record<string, any>) {
	return {
		__html: JSON.stringify(json),
	};
}

export function productJsonLd({ name, description, images, url }: { name: string; description?: string; images?: string[]; url: string }) {
	return {
		"@context": "https://schema.org",
		"@type": "Product",
		name,
		description,
		image: images,
		url,
	};
}

export function blogPostingJsonLd({ title, description, url, image }: { title: string; description?: string; url: string; image?: string }) {
	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: title,
		description,
		image,
		url,
	};
}



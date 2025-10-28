import Link from 'next/link';

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
	return (
		<nav aria-label="Breadcrumb" className="text-sm mb-4">
			<ol className="flex items-center gap-2 text-gray-600">
				{items.map((item, idx) => (
					<li key={idx} className="flex items-center gap-2">
						{item.href ? (
							<Link href={item.href} className="hover:underline">{item.label}</Link>
						) : (
							<span aria-current="page" className="text-gray-900">{item.label}</span>
						)}
						{idx < items.length - 1 && <span>/</span>}
					</li>
				))}
			</ol>
		</nav>
	);
}



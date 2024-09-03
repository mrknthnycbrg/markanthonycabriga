import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const site = 'https://markanthonycabriga.vercel.app';
	const pages = ['/', '/about', '/projects', '/contact'];
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
	${pages
		.map(
			(page) => `
	<url>
		<loc>${site}${page}</loc>
	</url>`
		)
		.join('')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};

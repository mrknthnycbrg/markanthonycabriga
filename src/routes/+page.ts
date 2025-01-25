import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		seo: {
			title: 'Mark Anthony Cabriga',
			content: 'A web developer creating efficient and innovative web solutions.'
		}
	};
}) satisfies PageLoad;

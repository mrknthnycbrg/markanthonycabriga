import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		seo: {
			title: 'Mark Anthony Cabriga',
			content: 'A Laravel developer creating efficient and innovative web solutions with Laravel.'
		}
	};
}) satisfies PageLoad;

import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		seo: {
			title: 'Mark Anthony Cabriga - About',
			content: 'Learn about Mark Anthony Cabriga.'
		}
	};
}) satisfies PageLoad;

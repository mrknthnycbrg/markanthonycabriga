import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		seo: {
			title: 'Mark Anthony Cabriga - Projects',
			content: 'Explore the projects of Mark Anthony Cabriga.'
		}
	};
}) satisfies PageLoad;

import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		seo: {
			title: 'Mark Anthony Cabriga - Contact',
			content: 'Get in touch with Mark Anthony Cabriga.'
		}
	};
}) satisfies PageLoad;

import type { PageLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';
import { normalize } from 'viem/ens';
import { getEnsUrl } from '$lib/url';

export const load: PageLoad = async ({ url }) => {
	const query = url.searchParams.get('q');

	if (!query) {
		error(400, 'Missing query parameter');
	}

	const queryComponents = query.split(/[\s+]/);

	if (queryComponents.length > 1 || query.endsWith('-')) {
		return {
			domains: queryComponents.map(it => it.endsWith('-') ? it.slice(0, -1) : it).map(normalize)
		};
	}

	const ensUrl = await getEnsUrl(query);

	if (ensUrl) {
		return redirect(302, ensUrl);
	}

	return {
		domains: [normalize(query)]
	};
};
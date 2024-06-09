import type { RequestHandler } from "./$types";
import { error, json } from '@sveltejs/kit';
import { getNameSuggestions } from '$lib/suggestions';

export const GET: RequestHandler = async ({url}) => {
	const query = url.searchParams.get('q');

	if (!query) {
		error(400, 'Missing query parameter')
	}

	const queryComponents = query.split(/[\s+]/);
	if (queryComponents.length === 0) {
		return json([query, []]);
	}

	const lastComponent = queryComponents[queryComponents.length - 1];

	const suggestions = await getNameSuggestions(lastComponent);

	const suggestedQueries = suggestions.map(it => queryComponents.slice(0, -1).concat(it).map(it => it + " ").join(''));

	return json([
		query,
		suggestedQueries
	])
}

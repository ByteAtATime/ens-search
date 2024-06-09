export const getNameSuggestions = async (query: string): Promise<string[]> => {
	const res = await fetch(`https://api.thegraph.com/subgraphs/name/ensdomains/ens/`, {
		method: "POST",
		body: JSON.stringify({
			query: `
				query {
					domains(where: {name_starts_with: "${query}"}, first: 5) {
						name
					}
				}
			`
		})
	})

	const {data} = await res.json();

	return data.domains.map((it: { name: string }) => it.name)
}

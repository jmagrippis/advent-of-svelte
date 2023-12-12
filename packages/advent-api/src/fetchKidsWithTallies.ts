export type FetchKidsWithTalliesOptions = {
	query?: string
	status?: string | null
}

export type Kid = {
	name: string
	tally: number
}
export const fetchKidsWithTallies = async (
	{query = '', status = null}: FetchKidsWithTalliesOptions = {
		query: '',
		status: null,
	},
) => {
	const response = await fetch(
		'https://advent.sveltesociety.dev/data/2023/day-one.json',
	)
	if (response.ok) {
		const allKids: Kid[] = await response.json()
		if (query || status) {
			return allKids.reduce<Kid[]>((acc, {name, tally}) => {
				if (query && !name.toLowerCase().includes(query.toLowerCase())) {
					return acc
				}
				if (status || status === 'any') {
					if (
						(status === 'nice' && tally < 0) ||
						(status === 'naughty' && tally >= 0)
					) {
						return acc
					}
				}
				acc.push({name, tally})

				return acc
			}, [])
		}
		return allKids
	} else {
		throw Error('Could not fetch tallies')
	}
}

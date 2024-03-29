import type {PageServerLoad} from './$types'
import {fetchKidsWithTallies} from '@repo/advent-api'

export const load: PageServerLoad = async ({url}) => {
	const query = url.searchParams.get('query') ?? ''
	const status = url.searchParams.get('status') ?? ''

	const kids = await fetchKidsWithTallies({query, status})

	return {
		kids,
		meta: {
			title: 'Naughty or Nice Tracker',
			description:
				'Search through Santa’s list to see which kid has been naughty or nice!',
		},
	}
}

import type {PageServerLoad} from './$types'
import {fetchKidsWithTallies} from '@repo/advent-api'

export const load: PageServerLoad = async ({url}) => {
	const query = url.searchParams.get('query') ?? ''
	const kids = await fetchKidsWithTallies({query})
	return {kids}
}

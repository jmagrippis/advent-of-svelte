import {fetchPresents} from '@repo/advent-api'
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => {
	const presents = await fetchPresents()

	return {
		presents,
		meta: {
			title: 'Sleigh Load Balancer',
			description:
				'Visualise which presents the Sleigh can hold, on optimise the load for each trip!',
		},
	}
}

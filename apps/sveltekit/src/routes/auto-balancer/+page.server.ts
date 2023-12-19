import {
	fetchPresentsForLoadBalancer,
	type LoadBalancerPresent,
} from '@repo/advent-api'
import type {PageServerLoad} from './$types'

export type Loadout = {
	presents: LoadBalancerPresent[]
	weight: number
	perfectLoads: number
}

const FIVE_MINUTES_IN_SECONDS = 1000 * 60 * 5

const MAX_SLEIGH_LOAD_WEIGHT = 100

export const load: PageServerLoad = async ({setHeaders}) => {
	const presents = await fetchPresentsForLoadBalancer()

	const loadouts: Loadout[] = presents.reduce(
		(acc, present) => {
			if (
				acc[acc.length - 1].weight + present.weight <=
				MAX_SLEIGH_LOAD_WEIGHT
			) {
				acc[acc.length - 1].presents.push(present)
				acc[acc.length - 1].weight += present.weight
				if (acc[acc.length - 1].weight === MAX_SLEIGH_LOAD_WEIGHT) {
					acc[acc.length - 1].perfectLoads++
				}
			} else {
				acc.push({
					presents: [present],
					weight: present.weight,
					perfectLoads: 0,
				})
			}
			return acc
		},
		[
			{
				presents: [] as LoadBalancerPresent[],
				weight: 0,
				perfectLoads: 0,
			},
		],
	)

	const averageLoad =
		loadouts.reduce((sum, {weight}) => sum + weight, 0) / loadouts.length

	setHeaders({
		'Cache-Control': `public, max-age=${FIVE_MINUTES_IN_SECONDS}`,
	})

	return {
		loadouts,
		averageLoad,
		meta: {
			title: 'Auto Load Balancer',
			description:
				'Get the optimised sleigh to maximise gift delivery with as few trips as possible!',
		},
	}
}

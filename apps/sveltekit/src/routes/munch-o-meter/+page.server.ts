import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => ({
	meta: {
		title: 'Merry Munch-o-Meter',
		description:
			'Track Santa’s cookie consumption, and see his mood! Is it jolly?!',
	},
})

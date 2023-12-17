import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => ({
	meta: {
		title: 'Christmas Countdown',
		description:
			'See exactly how much time remains to Christmas, and see it update live as we approach midnight on Christmas’ Eve!',
	},
})

import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => ({
	meta: {
		title: 'Pop-up!',
		description:
			'Read a heart-warming message from Santa, as you countdown to Christmas Day ❄️',
	},
})

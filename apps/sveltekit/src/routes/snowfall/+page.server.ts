import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => ({
	meta: {
		title: 'Snowfall Symphony',
		description: 'Wiggle your mouse to spawn snowflakes ❄️',
	},
})

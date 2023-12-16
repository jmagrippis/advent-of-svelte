import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => ({
	meta: {
		title: 'Mistletoe Metronome',
		description:
			'Tap along to the beat of your favourite songs with the Mistletoe Metronome!',
	},
})

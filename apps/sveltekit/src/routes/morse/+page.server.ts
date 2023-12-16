import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => ({
	meta: {
		title: 'Morse Code Translator',
		description:
			'Encode your message to Morse Code or decode Morse Code to human-readable text! Includes an audio player to help you with the timings.',
	},
})

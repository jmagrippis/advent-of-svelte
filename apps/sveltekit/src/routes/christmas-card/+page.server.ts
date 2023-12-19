import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => {
	return {
		meta: {
			title: 'Christmas Greeting Card',
			description:
				'Personalize a seasonal Greeting Card with a variety of images and your own heart-warming message!',
		},
	}
}

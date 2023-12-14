import {fetchHeartRate} from '@repo/advent-api'
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => {
	const serverHeartRate = await fetchHeartRate()

	return {
		serverHeartRate,
		meta: {
			title: 'Santa’s Heart Rate Monitor',
			description:
				'See a visualisation of Santa’s heart rate which updates in realtime! Does he get more excited when he’s about to deliver a present?',
		},
	}
}

import {fetchHeartRate} from '@repo/advent-api'
import type {RequestHandler} from './$types'

export const GET: RequestHandler = async () => {
	const encoder = new TextEncoder()
	let interval: NodeJS.Timeout
	const readable = new ReadableStream({
		start(controller) {
			interval = setInterval(async () => {
				const heartRate = await fetchHeartRate()
				controller.enqueue(encoder.encode(`${heartRate}`))
			}, 1_000)
		},
		cancel() {
			clearInterval(interval)
		},
	})

	return new Response(readable, {
		headers: {
			'content-type': 'text/event-stream',
		},
	})
}

import {building} from '$app/environment'
import {PUBLIC_API_MOCKING_ENABLED} from '$env/static/public'
import type {Handle} from '@sveltejs/kit'

if (!building && PUBLIC_API_MOCKING_ENABLED === 'true') {
	import('./mocks/mswNode').then(async ({mswNode}) => {
		mswNode.listen()
	})
}

export const handle: Handle = async ({event, resolve}) => {
	const response = await resolve(event)

	return response
}

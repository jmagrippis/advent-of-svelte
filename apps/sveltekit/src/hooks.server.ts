import {PUBLIC_API_MOCKING_ENABLED} from '$env/static/public'
import type {Handle} from '@sveltejs/kit'

export const handle: Handle = async ({event, resolve}) => {
	if (PUBLIC_API_MOCKING_ENABLED === 'true') {
		import('@repo/msw').then(async ({setupMocks}) => {
			await setupMocks()
		})
	}

	const response = await resolve(event)

	return response
}

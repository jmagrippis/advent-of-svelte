import {PUBLIC_API_MOCKING_ENABLED} from '$env/static/public'

if (PUBLIC_API_MOCKING_ENABLED === 'true') {
	await import('@repo/msw').then(async ({setupMocks}) => {
		await setupMocks()
	})
}

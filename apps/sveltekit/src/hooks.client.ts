import {building} from '$app/environment'
import {PUBLIC_API_MOCKING_ENABLED} from '$env/static/public'

if (!building && PUBLIC_API_MOCKING_ENABLED === 'true') {
	import('./mocks/mswBrowser').then(async ({mswBrowser}) => mswBrowser.start())
}

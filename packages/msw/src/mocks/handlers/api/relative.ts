import {http, passthrough} from 'msw'

export const relativeApiHandlers = [
	// allow all relative requests to pass through
	http.all('/*', () => passthrough()),
]

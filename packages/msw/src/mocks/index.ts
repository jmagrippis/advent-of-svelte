export const setupMocks = async (isBrowser: boolean) => {
	if (isBrowser) {
		return import('./mswBrowser').then(async ({mswBrowser}) =>
			mswBrowser.start(),
		)
	} else {
		return import('./mswNode').then(async ({mswNode}) => mswNode.listen())
	}
}

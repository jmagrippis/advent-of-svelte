const IS_BROWSER = typeof window !== 'undefined'

export const setupMocks = async () => {
	if (IS_BROWSER) {
		const {mswBrowser} = await import('./mswBrowser')
		return mswBrowser.start()
	} else {
		const {mswNode} = await import('./mswNode')
		return mswNode.listen()
	}
}

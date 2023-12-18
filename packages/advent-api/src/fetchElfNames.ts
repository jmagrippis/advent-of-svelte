export type NamesList = {
	firstNames: string[]
	lastNames: string[]
}

export const fetchElfNames = async (): Promise<NamesList> => {
	const response = await fetch(
		'https://advent.sveltesociety.dev/data/2023/day-eleven.json',
	)
	if (response.ok) {
		return response.json()
	} else {
		throw Error('Could not fetch elf names')
	}
}

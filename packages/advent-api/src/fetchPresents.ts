export type Present = {
	name: string
	weight: number
}
export const fetchPresents = async () => {
	const response = await fetch(
		'https://advent.sveltesociety.dev/data/2023/day-three.json',
	)
	if (response.ok) {
		return response.json()
	} else {
		throw Error('Could not fetch presents')
	}
}

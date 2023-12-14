type HeartRateResponse = {
	heartRate: 65
}

export const fetchHeartRate = async (
	signal: AbortSignal | null = null,
): Promise<number> => {
	const response = await fetch(
		'https://advent.sveltesociety.dev/data/2023/day-four.json',
		{signal},
	)
	if (response.ok) {
		const json = (await response.json()) as HeartRateResponse
		return json.heartRate
	} else {
		throw Error('Could not fetch heart rate')
	}
}

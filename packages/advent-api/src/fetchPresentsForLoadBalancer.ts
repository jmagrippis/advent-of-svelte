export type LoadBalancerPresent = {
	name: string
	weight: number
}
export const fetchPresentsForLoadBalancer = async (): Promise<
	LoadBalancerPresent[]
> => {
	const response = await fetch(
		'https://advent.sveltesociety.dev/data/2023/day-thirteen.json',
	)
	if (response.ok) {
		return response.json()
	} else {
		throw Error('Could not fetch presents')
	}
}

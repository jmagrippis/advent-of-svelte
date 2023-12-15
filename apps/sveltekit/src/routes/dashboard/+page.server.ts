import type {Metrics} from '../api/elf-productivity-metrics/+server'
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async ({fetch}) => {
	const {
		totalToysCreated,
		totalPresentsWrapped,
		averageMinutesPerTask,
		billableHours,
		elfStats,
	} = await fetch('/api/elf-productivity-metrics').then(
		(response) => response.json() as Promise<Metrics>,
	)

	return {
		totalToysCreated,
		totalPresentsWrapped,
		averageMinutesPerTask,
		billableHours,
		elfStats,
		meta: {
			title: 'Elf Productivity Dashboard',
			description:
				'Check out bespoke productivity insights & metrics, as the elves outdo each other to have enough presents ready to go for Christmas!',
		},
	}
}

import {json} from '@sveltejs/kit'
import type {RequestHandler} from './$types'
import {fetchProductivityTasks} from '@repo/advent-api'

export type ElfStats = Record<string, {tasksCompleted: number}>
export type Metrics = {
	totalToysCreated: number
	totalPresentsWrapped: number
	averageMinutesPerTask: number
	billableHours: number
	elfStats: ElfStats
}

export const GET: RequestHandler = async () => {
	const tasks = await fetchProductivityTasks()

	const totals = tasks.reduce<{
		totalToysCreated: number
		totalPresentsWrapped: number
		totalMinutes: number
		elfStats: Record<string, {tasksCompleted: number}>
	}>(
		(acc, taskEvent) => {
			// totals
			if (taskEvent.task === 'CREATED_TOY') {
				acc.totalToysCreated++
			}
			if (taskEvent.task === 'WRAPPED_PRESENT') {
				acc.totalPresentsWrapped++
			}
			acc.totalMinutes += taskEvent.minutesTaken
			// elf stats
			if (!acc.elfStats[taskEvent.elf]) {
				acc.elfStats[taskEvent.elf] = {
					tasksCompleted: 0,
				}
			}
			acc.elfStats[taskEvent.elf].tasksCompleted++

			return acc
		},
		{
			totalToysCreated: 0,
			totalPresentsWrapped: 0,
			totalMinutes: 0,
			elfStats: {},
		},
	)

	const metrics: Metrics = {
		totalToysCreated: totals.totalToysCreated,
		totalPresentsWrapped: totals.totalPresentsWrapped,
		averageMinutesPerTask: totals.totalMinutes / tasks.length,
		billableHours: Math.floor(totals.totalMinutes / 60),
		elfStats: totals.elfStats,
	}
	return json(metrics)
}

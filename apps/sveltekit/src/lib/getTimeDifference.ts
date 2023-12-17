const units = [
	{unit: 'years', ms: 24 * 60 * 60 * 1000 * 365, modulo: null},
	{unit: 'months', ms: (24 * 60 * 60 * 1000 * 365) / 12, modulo: 12},
	{unit: 'days', ms: 24 * 60 * 60 * 1000, modulo: 31},
	{unit: 'hours', ms: 60 * 60 * 1000, modulo: 24},
	{unit: 'minutes', ms: 60 * 1000, modulo: 60},
	{unit: 'seconds', ms: 1000, modulo: 60},
]

export type TimeDifference = {
	years: number
	months: number
	days: number
	hours: number
	minutes: number
	seconds: number
}

export const getTimeDifference = (
	dateA: Date,
	dateB: Date = new Date(),
): TimeDifference => {
	const msDifference = dateB.getTime() - dateA.getTime()

	const difference: TimeDifference = {
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	}
	for (const {unit, ms, modulo} of units) {
		difference[unit as keyof TimeDifference] = Math.round(msDifference / ms)
		if (modulo) {
			difference[unit as keyof TimeDifference] %= modulo
		}
	}

	return difference
}

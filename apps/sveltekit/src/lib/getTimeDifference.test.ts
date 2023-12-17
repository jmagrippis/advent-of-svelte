import {expect, it} from 'vitest'
import {getTimeDifference} from './getTimeDifference'

it('returns the amount of years between two dates', () => {
	const dateA = new Date('1985-10-20')
	const dateB = new Date('2023-10-20')

	const resultA = getTimeDifference(dateA, dateB)
	expect(resultA.years).toBe(38)

	const dateC = new Date('1988-10-20')

	const resultB = getTimeDifference(dateA, dateC)
	expect(resultB.years).toBe(3)
})

it('returns the amount of months between two dates', () => {
	const christmas = new Date('2023-12-25')
	const dateA = new Date('2023-11-24')

	const resultA = getTimeDifference(christmas, dateA)
	expect(resultA.months).toBe(-1)

	const dateB = new Date('2023-10-24')

	const resultB = getTimeDifference(christmas, dateB)
	expect(resultB.months).toBe(-2)
})

it('returns the amount of days between two dates', () => {
	const christmas = new Date('2023-12-25')
	const dateA = new Date('2023-12-17')

	const resultA = getTimeDifference(christmas, dateA)
	expect(resultA.days).toBe(-8)

	const dateB = new Date('2023-12-24')

	const resultB = getTimeDifference(christmas, dateB)
	expect(resultB.days).toBe(-1)
})

it('returns the amount of hours between two dates', () => {
	const christmas = new Date('2023-12-25T00:00:00.000Z')
	const dateA = new Date('2023-12-24T23:00:00.000Z')

	const resultA = getTimeDifference(christmas, dateA)
	expect(resultA.hours).toBe(-1)

	const dateB = new Date('2023-12-24T15:00:00.000Z')

	const resultB = getTimeDifference(christmas, dateB)
	expect(resultB.hours).toBe(-9)
})

it('can return a combination of days and hours between two dates', () => {
	const christmas = new Date('2023-12-25T00:00:00.000Z')
	const dateA = new Date('2023-12-23T20:00:00.000Z')

	const resultA = getTimeDifference(christmas, dateA)
	expect(resultA.days).toBe(-1)
	expect(resultA.hours).toBe(-4)

	const dateB = new Date('2023-12-24T15:00:00.000Z')

	const resultB = getTimeDifference(christmas, dateB)
	expect(resultB.hours).toBe(-9)
})

it('returns the amount of minutes between two dates', () => {
	const christmas = new Date('2023-12-25T00:00:00.000Z')
	const dateA = new Date('2023-12-24T23:58:00.000Z')

	const resultA = getTimeDifference(christmas, dateA)
	expect(resultA.minutes).toBe(-2)

	const dateB = new Date('2023-12-24T22:50:00.000Z')

	const resultB = getTimeDifference(christmas, dateB)
	expect(resultB.minutes).toBe(-10)
})

it('returns the amount of seconds between two dates', () => {
	const christmas = new Date('2023-12-25T00:00:00.000Z')
	const dateA = new Date('2023-12-24T23:59:50.000Z')

	const resultA = getTimeDifference(christmas, dateA)
	expect(resultA.seconds).toBe(-10)

	const dateB = new Date('2023-12-24T23:59:01.000Z')

	const resultB = getTimeDifference(christmas, dateB)
	expect(resultB.seconds).toBe(-59)
})

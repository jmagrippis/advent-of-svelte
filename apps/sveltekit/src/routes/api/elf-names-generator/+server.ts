import {error, json} from '@sveltejs/kit'
import type {RequestHandler} from './$types'
import {fetchElfNames} from '@repo/advent-api'
import seedrandom from 'seedrandom'
import {z} from 'zod'

const ONE_DAY_IN_SECONDS = 1000 * 60 * 60 * 24

const GenerateElfNamesSchema = z.object({
	name: z.string().optional(),
	amount: z.coerce.number().positive().optional(),
})

export const GET: RequestHandler = async ({url, setHeaders}) => {
	const validation = GenerateElfNamesSchema.safeParse({
		name: url.searchParams.get('name'),
		amount: url.searchParams.get('amount') ?? 5,
	})

	if (!validation.success) {
		error(400, 'invalid name and/or amount search params given')
	}

	const {name, amount} = validation.data
	const seed = name ? name : undefined

	const {firstNames, lastNames} = await fetchElfNames()

	const rng = seedrandom(seed)

	const elfNames = [...Array(amount).keys()].map(
		() =>
			`${firstNames[Math.floor(rng() * firstNames.length)]} ${
				lastNames[Math.floor(rng() * lastNames.length)]
			}`,
	)

	setHeaders({
		'Cache-Control': `public, max-age=${ONE_DAY_IN_SECONDS}`,
	})

	return json(elfNames)
}

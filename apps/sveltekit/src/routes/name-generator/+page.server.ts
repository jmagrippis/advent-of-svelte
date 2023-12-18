import type {PageServerLoad} from './$types'

const ONE_DAY_IN_SECONDS = 1000 * 60 * 60 * 24

export const load: PageServerLoad = async ({url, fetch, setHeaders}) => {
	const name = url.searchParams.get('name') ?? ''

	const elfNames = await fetch(
		`/api/elf-names-generator?name=${encodeURIComponent(name)}`,
	).then((r) => r.json())

	setHeaders({
		'Cache-Control': `public, max-age=${ONE_DAY_IN_SECONDS}`,
	})
	return {
		elfNames,
		meta: {
			title: 'Elf Name Generator',
			description:
				'Transform your human name into an elf name, with this tool approved by Santa’s most diligent helpers',
		},
	}
}

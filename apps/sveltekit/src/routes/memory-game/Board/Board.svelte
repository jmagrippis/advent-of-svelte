<script lang="ts">
	import {enhance} from '$app/forms'
	import Button from '$lib/components/Button.svelte'
	import {delay} from '$lib/delay'
	import type {GameCard} from '../+page.server'
	import Card from './Card/Card.svelte'

	export let board: GameCard[]

	let selectedIndices = new Set()
	let justMissed = false
</script>

<form
	use:enhance={({formData}) => {
		// @ts-ignore TODO: we can typescript type this with Svelte 5
		const selectedCardIndex = parseInt(formData.get('index'))

		selectedIndices.add(selectedCardIndex)
		selectedIndices = selectedIndices

		return async ({result, update}) => {
			if (result.type === 'success') {
				if (result.data?.outcome) {
					if (result.data?.outcome === 'miss') {
						await delay(100)
						justMissed = true
						await delay(500)
						justMissed = false
						selectedIndices = new Set()
					} else if (result.data?.outcome === 'match') {
						selectedIndices = new Set()
					}
				}
			}

			await update()
		}
	}}
	method="POST"
	action="?/reveal"
	class="breakout grid grid-cols-4 place-items-center items-center gap-x-4 gap-y-2 sm:grid-cols-6 sm:gap-4 lg:gap-6 xl:grid-cols-8 xl:gap-8"
>
	{#each board as { face, status }, index}
		<Card
			{face}
			revealed={selectedIndices.has(index) || status !== 'hidden'}
			value={`${index}`}
			shaking={justMissed && selectedIndices.has(index)}
		/>
	{/each}
</form>

<form
	use:enhance={() => {
		selectedIndices = new Set()
		board = []
	}}
	method="POST"
	action="?/new"
	class="flex flex-col items-center"
>
	<Button>new deal</Button>
</form>

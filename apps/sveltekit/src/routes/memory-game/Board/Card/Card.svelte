<script lang="ts">
	import type {CardStatus} from '../../+page.server'
	import Back from './back.png?enhanced'

	const CardFaces = import.meta.glob<{default: string}>('./faces/*.png', {
		eager: true,
		query: {
			enhanced: true,
		},
	})

	export let face: number
	export let status: CardStatus
	export let value: string

	$: Face =
		CardFaces[`./faces/${face}.png`] && CardFaces[`./faces/${face}.png`].default
</script>

<button name="index" {value}>
	{#if status === 'hidden'}
		<enhanced:img
			class="rounded-xl shadow"
			src={Back}
			alt="The back of a card from the Deck of Doubles"
		/>
	{:else}
		<enhanced:img src={Face} alt={`Card ${face} of the Deck of Doubles`} />
	{/if}
</button>

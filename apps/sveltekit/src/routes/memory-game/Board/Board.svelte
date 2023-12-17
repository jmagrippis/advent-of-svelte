<script lang="ts">
	import {enhance} from '$app/forms'
	import type {GameCard} from '../+page.server'
	import Card from './Card/Card.svelte'

	export let board: GameCard[]
</script>

<form
	use:enhance
	method="post"
	action="?/reveal"
	class="breakout grid grid-cols-4 place-items-center items-center gap-x-4 gap-y-2 sm:grid-cols-6 sm:gap-4 lg:gap-6 xl:grid-cols-8 xl:gap-8"
>
	{#each board as { face, status }, index}
		<Card {face} {status} value={`${index}`} />
	{/each}
</form>

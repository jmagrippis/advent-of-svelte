<script lang="ts">
	import {enhance} from '$app/forms'
	import Button from '$lib/components/Button.svelte'
	import PageTitle from '$lib/components/PageTitle.svelte'
	import Board from './Board/Board.svelte'

	export let data
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8 xl:text-2xl">
	<PageTitle>Deck of Doubles Memory Game</PageTitle>

	<section>
		<p>
			Test your memory by finding all <strong>24 matching pairs</strong> of cards!
		</p>
		<p class="mb-2">
			When you find a match, the cards stay revealed. When you miss, the go back
			to face down, and you need to try again!
		</p>
	</section>

	<Board board={data.board} />

	<form
		use:enhance
		method="POST"
		action="?/new"
		class="flex flex-col items-center"
	>
		<Button>new deal</Button>
	</form>
</main>

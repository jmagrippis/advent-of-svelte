<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import Wizard from './Wizard/Wizard.svelte'

	export let data
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8">
	<PageTitle>Season’s Greetings</PageTitle>
	<p>
		Drag and Drop the images you like the most to personalise your greeting
		card!
	</p>

	<Wizard />
</main>

<style lang="postcss">
	main {
		view-transition-name: greeting-card;
	}
	:global(::view-transition-old(greeting-card)):only-child {
		animation: 300ms ease-out both fade-out-to-left;
	}

	:global(::view-transition-new(greeting-card)):only-child {
		animation: 300ms ease-out both slide-from-right;
	}

	/* "back" navigation */
	:global(:root[data-back]::view-transition-old(greeting-card)):only-child {
		pointer-events: none;
		animation: 300ms ease-out both fade-out-to-right;
	}

	:global(:root[data-back]::view-transition-new(greeting-card)):only-child {
		pointer-events: none;
		animation: 300ms ease-out both slide-from-left;
	}
</style>

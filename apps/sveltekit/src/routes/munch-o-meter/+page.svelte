<script lang="ts">
	import Meter from './Meter.svelte'
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8">
	<h1 class="text-4xl font-bold lg:text-6xl">Merry Munch-o-Meter</h1>
	<p>Track Santa’s cookie consumption, and see his current mood!</p>

	<Meter />
</main>

<style>
	h1 {
		view-transition-name: munch-o-header;
	}

	/* Exit transition */
	:global(::view-transition-old(munch-o-header)):only-child {
		animation: 300ms ease-out both fade-out-to-left;
	}

	/* Entry transition */
	:global(::view-transition-new(munch-o-header)):only-child {
		animation: 300ms ease-out both slide-from-right;
	}
</style>

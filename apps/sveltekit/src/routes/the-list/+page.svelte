<script>
	import NaughtyOrNiceTracker from './NaughtyOrNiceTracker.svelte'

	export let data
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8">
	<h1 class="text-4xl font-bold lg:text-6xl">Naughty or Nice Tracker</h1>

	<NaughtyOrNiceTracker kids={data.kids} />
</main>

<style>
	h1 {
		view-transition-name: tracker-header;
	}

	/* Exit transition */
	:global(::view-transition-old(tracker-header)):only-child {
		animation: 300ms ease-out both fade-out-to-left;
	}

	/* Entry transition */
	:global(::view-transition-new(tracker-header)):only-child {
		animation: 300ms ease-out both slide-from-right;
	}
</style>

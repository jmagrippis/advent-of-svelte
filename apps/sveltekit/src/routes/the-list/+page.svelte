<script>
	import NaughtyOrNiceTracker from './NaughtyOrNiceTracker.svelte'

	export let data
</script>

<main class="content-grid gap-y-4 lg:gap-y-8">
	<h1 class="text-4xl font-bold lg:text-6xl">Naughty or Nice Tracker</h1>

	<NaughtyOrNiceTracker kids={data.kids} />
</main>

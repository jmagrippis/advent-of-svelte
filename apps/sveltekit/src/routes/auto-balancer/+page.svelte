<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import Stat from '$lib/components/Stat.svelte'
	import Loadouts from './Loadouts.svelte'

	export let data
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8">
	<PageTitle>Auto Load Balancer</PageTitle>
	<section class="grid grid-cols-2 text-6xl lg:text-8xl">
		<Stat value={data.loadouts.length} label="total trips remaining" />
		<Stat value={data.averageLoad} label="average load in kg" />
	</section>
	<section class="mb-2 flex flex-col gap-6">
		<h2 class="text-3xl font-bold lg:text-5xl">Suggested Loadouts</h2>
		<Loadouts loadouts={data.loadouts} />
	</section>
</main>

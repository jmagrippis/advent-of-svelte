<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import {onMount} from 'svelte'
	import Leaderboards from './Leaderboards.svelte'
	import Stat from './Stat.svelte'
	import type {Metrics} from '../api/elf-productivity-metrics/+server'

	export let data

	let latestMetrics = data.metrics

	onMount(() => {
		const interval = setInterval(async () => {
			const response = await fetch('/api/elf-productivity-metrics')
			const metrics: Metrics = await response.json()
			latestMetrics = metrics
		}, 10_000)

		return () => clearInterval(interval)
	})
</script>

<main class="content-grid grow gap-y-8 lg:gap-y-12">
	<PageTitle style={'view-transition-name: tracker-header;'}
		>Elf Productivity Dashboard</PageTitle
	>
	<section class="grid grid-cols-2 text-7xl lg:text-8xl">
		<Stat value={latestMetrics.totalToysCreated} label="toys created" />
		<Stat value={latestMetrics.totalPresentsWrapped} label="presents wrapped" />
		<Stat
			value={latestMetrics.averageMinutesPerTask}
			label="minutes per task"
		/>
		<Stat value={latestMetrics.billableHours} label="billable hours" />
	</section>

	<Leaderboards elfStats={latestMetrics.elfStats} />
</main>

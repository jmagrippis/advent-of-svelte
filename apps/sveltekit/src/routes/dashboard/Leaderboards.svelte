<script lang="ts">
	import {flip} from 'svelte/animate'
	import type {ElfStats} from '../api/elf-productivity-metrics/+server'
	import BarChart from './BarChart.svelte'
	import {browser} from '$app/environment'

	export let elfStats: ElfStats

	let chartWidth: number
	let chartHeight: number

	$: elfNameWithStats = Object.entries(elfStats).sort(
		([, a], [, b]) => b.tasksCompleted - a.tasksCompleted,
	)
</script>

<section class="flex flex-col gap-y-4 lg:gap-y-8">
	<h2 class="text-3xl font-bold lg:text-5xl">🧝 Realtime Leaderboards</h2>
	<h3 class="text-2xl font-bold lg:text-4xl">✅ Total Tasks Completed</h3>
	<ol>
		{#each elfNameWithStats as [name, stats] (name)}
			<li class="flex justify-between gap-4" animate:flip={{duration: 300}}>
				<h2 class="text-xl font-medium">{name}</h2>
				<strong>{stats.tasksCompleted}</strong>
			</li>
		{/each}
	</ol>
</section>

<section
	class="breakout min-h-[33svh]"
	bind:offsetWidth={chartWidth}
	bind:offsetHeight={chartHeight}
>
	{#if browser}
		<BarChart data={elfNameWithStats} width={chartWidth} height={chartHeight} />
	{/if}
</section>

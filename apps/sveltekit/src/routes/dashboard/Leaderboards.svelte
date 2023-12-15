<script lang="ts">
	import {flip} from 'svelte/animate'
	import type {ElfStats} from '../api/elf-productivity-metrics/+server'

	export let elfStats: ElfStats

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

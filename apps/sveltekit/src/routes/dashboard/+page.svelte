<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import Stat from './Stat.svelte'

	export let data

	$: elfNameWithStats = Object.entries(data.elfStats).toSorted(
		([, a], [, b]) => b.tasksCompleted - a.tasksCompleted,
	)
</script>

<main class="content-grid grow gap-y-8 lg:gap-y-12">
	<PageTitle style={'view-transition-name: tracker-header;'}
		>Elf Productivity Dashboard</PageTitle
	>
	<section class="grid grid-cols-2 text-7xl lg:text-8xl">
		<Stat value={data.totalToysCreated} label="toys created" />
		<Stat value={data.totalPresentsWrapped} label="presents wrapped" />
		<Stat value={data.averageMinutesPerTask} label="minutes per task" />
		<Stat value={data.billableHours} label="billable hours" />
	</section>

	<section class="flex flex-col gap-y-4 lg:gap-y-8">
		<h2 class="text-3xl font-bold lg:text-5xl">🧝🧝‍♀️🧝‍♂️ Elf Leaderboards</h2>
		<h3 class="text-2xl font-bold lg:text-4xl">✅ Total Tasks Completed</h3>
		<ol>
			{#each elfNameWithStats as [name, stats]}
				<li class="flex justify-between gap-4">
					<h2 class="text-xl font-medium">{name}</h2>
					<strong>{stats.tasksCompleted}</strong>
				</li>
			{/each}
		</ol>
	</section>
</main>

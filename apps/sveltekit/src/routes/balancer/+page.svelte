<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import Progress from '$lib/components/Progress.svelte'

	export let data

	let selectedPresentIndices: number[] = []

	$: selectedPresents = selectedPresentIndices.map((i) => data.presents[i])
	$: currentLoad = selectedPresents.reduce((sum, {weight}) => sum + weight, 0)
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8">
	<PageTitle>Sleigh Load Balancer</PageTitle>
	<section class="mb-2 flex flex-col gap-6">
		<h2 class="text-3xl font-bold lg:text-5xl">
			Current load: {currentLoad.toFixed(2)}kg
		</h2>
		<Progress current={currentLoad} total={100} />

		{#if currentLoad > 100}
			<div class="flex items-center gap-4 text-2xl">
				<span class="shrink-0">🚨🛷</span>
				<span class="grow text-center"
					>Attention: <strong>Maximum load exceeded</strong>!</span
				>
				<span class="shrink-0">🥵🚨</span>
			</div>
		{:else if currentLoad === 100}
			<div class="flex items-center gap-4 text-2xl">
				<span class="shrink-0">✅💝</span>
				<strong class="grow text-center">Perfect load!</strong>
				<span class="shrink-0">🫡✅</span>
			</div>
		{/if}
	</section>
	<ul class="picked-presents">
		{#each selectedPresents as { name, weight }}
			<li
				class="bg-surface-accent-1 flex flex-col items-center justify-center rounded-lg p-4"
			>
				<strong>{weight}kg</strong> for {name}
			</li>
		{/each}
	</ul>
	<form>
		<fieldset
			on:change={(event) => {
				if (!event.currentTarget.form) return
				const formData = new FormData(event.currentTarget.form)
				const indices = formData.getAll('presents').map(Number)

				selectedPresentIndices = indices
			}}
		>
			<legend class="mb-4 text-3xl lg:text-5xl"
				><strong class="font-bold">Available presents</strong>: (choose many)</legend
			>
			<div class="checkboxes">
				{#each data.presents as { name, weight }, i}
					<label class="flex items-center gap-2">
						<input type="checkbox" name="presents" value={i} />
						<span><strong>{weight}kg</strong> for {name}</span>
					</label>
				{/each}
			</div>
		</fieldset>
	</form>
</main>

<style>
	.picked-presents {
		--min: 12ch;

		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		@apply grid gap-4;
	}

	.checkboxes {
		--min: 20ch;

		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		@apply grid gap-x-2 gap-y-1;
	}
</style>

<script lang="ts">
	import {page} from '$app/stores'
	import Input from '$lib/components/Input.svelte'
	import Pill from '$lib/components/Pill.svelte'
	import MagnifyingGlass from '$lib/icons/MagnifyingGlass.svelte'

	export let kids: {name: string; tally: number}[] = []

	$: query = $page.url.searchParams.get('query')
</script>

<section class="flex flex-col gap-4">
	<search>
		<form data-sveltekit-keepfocus>
			<label class="grid grow items-center gap-2 md:grid-cols-3">
				<span>Search by name:</span>
				<span class="flex items-center gap-4 md:col-span-2">
					<Input name="query" value={query} placeholder="timmy" />
					<button>
						<span class="sr-only">execute search</span>{' '}
						<MagnifyingGlass class="h-7 w-7" />
					</button>
				</span>
			</label>
		</form>
	</search>

	{#if kids && kids.length}
		<ul class="flex flex-col gap-1">
			{#each kids as { name, tally }}
				<li class="flex items-center justify-between">
					<div>
						<strong>{name}</strong>: <span>{tally} good deeds</span>
					</div>
					<span></span>
					{#if tally >= 0}
						<Pill class="bg-primary-600">Nice 👼</Pill>
					{:else}
						<Pill class="bg-secondary-600">Naughty 😈</Pill>
					{/if}
				</li>
			{/each}
		</ul>
	{:else}
		<div>🫥 No matching kids!</div>
	{/if}
</section>

<style>
	search {
		view-transition-name: tracker-search;
	}

	:global(::view-transition-old(tracker-search)):only-child {
		animation: 300ms ease-out both fade-out-to-left;
	}

	:global(::view-transition-new(tracker-search)):only-child {
		animation: 300ms ease-out both slide-from-right;
	}

	/* "back" navigation */
	:global(:root[data-back]::view-transition-old(tracker-search)):only-child {
		pointer-events: none;
		animation: 300ms ease-out both fade-out-to-right;
	}

	:global(:root[data-back]::view-transition-new(tracker-search)):only-child {
		pointer-events: none;
		animation: 300ms ease-out both slide-from-left;
	}
</style>

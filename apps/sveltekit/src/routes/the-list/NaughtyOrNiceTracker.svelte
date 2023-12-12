<script lang="ts">
	import {page} from '$app/stores'
	import Pill from '$lib/components/Pill.svelte'
	import MagnifyingGlass from '$lib/icons/MagnifyingGlass.svelte'

	export let kids: {name: string; tally: number}[] = []

	$: query = $page.url.searchParams.get('query')
</script>

<section class="flex flex-col items-center">
	<div class="flex w-full flex-col gap-4">
		<search>
			<form>
				<label class="grid grow items-center gap-2 md:grid-cols-3">
					<span>Search by name:</span>
					<span class="flex items-center gap-4 md:col-span-2">
						<input
							class="border-foreground-brand bg-surface-brand-2 ring-offset-foreground-accent focus-visible:ring-foreground-accent flex h-10 w-full rounded-md border px-3 py-2 file:border-0 file:bg-transparent file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-gray-400"
							name="query"
							value={query}
							placeholder="timmy"
						/>
						<button>
							<span class="sr-only">execute search</span>{' '}
							<MagnifyingGlass class="h-7 w-7" />
						</button>
					</span>
				</label>
			</form>
		</search>

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
	</div>
</section>

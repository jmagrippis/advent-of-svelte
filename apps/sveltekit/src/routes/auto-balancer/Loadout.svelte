<script lang="ts">
	import {createCollapsible, melt} from '@melt-ui/svelte'
	import {slide} from 'svelte/transition'
	import type {Loadout} from './+page.server'

	const {
		elements: {root, content, trigger},
		states: {open},
	} = createCollapsible()

	const formatter = new Intl.NumberFormat('en-GB', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	})

	export let loadout: Loadout
</script>

<div
	use:melt={$root}
	class={`bg-surface-accent-1 relative rounded-lg px-4 py-1 ${
		$open ? 'col-span-2 sm:col-span-3 md:col-span-4' : ''
	}`}
>
	<div class="flex items-center gap-2">
		<div class="grow">
			{loadout.presents.length} presents ({formatter.format(loadout.weight)}kg)
		</div>
		<button
			use:melt={$trigger}
			class="bg-surface-brand-2 absolute right-1 top-1 h-8 w-8 rounded-full shadow transition duration-300 hover:brightness-125 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-75"
			aria-label="Toggle"
		>
			<span
				class="absolute left-0 top-1 w-full transition-transform"
				class:rotate-180={$open}
				style={$open ? 'top: 0;' : ''}>^</span
			>
		</button>
	</div>

	{#if $open}
		<ul use:melt={$content} transition:slide class="presents my-2 text-sm">
			{#each loadout.presents as { name, weight }}
				<li
					class="bg-surface-brand-2 flex flex-col items-center justify-center rounded-lg p-2"
				>
					<strong>{weight}kg</strong> for {name}
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="postcss">
	.presents {
		--min: 12ch;

		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		@apply grid gap-2;
	}
</style>

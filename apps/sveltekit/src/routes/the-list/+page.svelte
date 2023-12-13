<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import NaughtyOrNiceTracker from './NaughtyOrNiceTracker.svelte'

	export let data
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8">
	<PageTitle style={'view-transition-name: tracker-header;'}
		>Naughty or Nice Tracker</PageTitle
	>

	<NaughtyOrNiceTracker kids={data.kids} />
</main>

<style>
	:global(::view-transition-old(tracker-header)):only-child {
		animation: 300ms ease-out both fade-out-to-left;
	}

	:global(::view-transition-new(tracker-header)):only-child {
		animation: 300ms ease-out both slide-from-right;
	}

	/* "back" navigation */
	:global(:root[data-back]::view-transition-old(tracker-header)):only-child {
		pointer-events: none;
		animation: 300ms ease-out both fade-out-to-right;
	}

	:global(:root[data-back]::view-transition-new(tracker-header)):only-child {
		pointer-events: none;
		animation: 300ms ease-out both slide-from-left;
	}
</style>

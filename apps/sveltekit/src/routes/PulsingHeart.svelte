<script lang="ts">
	import Heart from '$lib/icons/Heart.svelte'

	let className = 'w-6'
	export {className as class}

	export let animationMode: 'hover' | 'always' | 'never' = 'hover'
</script>

<div class={className}>
	<Heart class="fill-secondary-600 w-full" />
	<Heart
		class={`fill-secondary-500 w-full ${
			animationMode === 'hover'
				? 'hover:animate-ping'
				: animationMode === 'always'
					? 'animate-ping'
					: ''
		}`}
	/>
</div>

<style lang="postcss">
	div {
		display: grid;
		grid-template-areas: 'stack';

		& > :global(*) {
			grid-area: stack;
		}
	}
</style>

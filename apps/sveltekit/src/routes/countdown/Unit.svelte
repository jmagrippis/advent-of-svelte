<script lang="ts">
	import {quintOut} from 'svelte/easing'
	import {fly} from 'svelte/transition'

	export let value: number
	export let label: string
</script>

<div class="flex flex-col">
	<div class="value z-1 grow">
		{#key value}
			<strong
				transition:fly={{
					duration: 150,
					y: 64,
					easing: quintOut,
				}}
				class="text-6xl lg:text-7xl">{Math.abs(value)}</strong
			>
		{/key}
	</div>
	<span class="z-10 text-2xl lg:text-3xl">{label}</span>
</div>

<style lang="postcss">
	.value {
		display: grid;
		grid-template-areas: 'stack';

		& > * {
			grid-area: stack;
			place-self: center;
		}
	}
</style>

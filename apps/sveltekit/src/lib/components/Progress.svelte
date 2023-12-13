<script lang="ts">
	export let current = 0
	export let total = 100

	$: width = `${Math.min(Math.ceil((current / total) * 100), 100)}%`
</script>

<div
	style={`--width: ${width}`}
	class="bg-surface-brand-2 h-4 w-full rounded-full p-1"
>
	<span
		class={`${
			current > 100 ? 'bg-surface-accent-1' : 'bg-surface-accent-1/50'
		} block h-2 rounded-full`}
	/>
</div>

<style lang="postcss">
	div {
		--width: 100%;

		& span {
			width: var(--width);
		}
	}
</style>

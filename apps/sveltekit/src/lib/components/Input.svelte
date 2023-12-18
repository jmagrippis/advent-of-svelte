<script lang="ts">
	import type {HTMLInputAttributes} from 'svelte/elements'

	export let name: HTMLInputAttributes['name']
	export let value: HTMLInputAttributes['value']
	export let placeholder: HTMLInputAttributes['placeholder']

	let className = ''

	export {className as class}
</script>

<input
	class={`${className} border-foreground-brand bg-surface-brand-2 ring-offset-foreground-accent focus-visible:ring-foreground-accent flex h-10 w-full rounded-md border px-3 py-2 file:border-0 file:bg-transparent file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-gray-400`}
	{name}
	{value}
	{placeholder}
/>

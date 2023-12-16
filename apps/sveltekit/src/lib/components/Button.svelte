<script lang="ts">
	let className = ''

	export {className as class}

	export let disabled: boolean | undefined = undefined
</script>

<button
	on:click
	{disabled}
	class={`${className} bg-surface-brand-2 focus:ring-foreground-accent active:duration-50 active:bg-surface-accent-1 relative rounded-lg px-4 py-8 text-5xl shadow transition duration-300 hover:brightness-125 focus:outline-none focus:ring-4 active:-translate-y-1 disabled:pointer-events-none disabled:opacity-50`}
	><slot /></button
>

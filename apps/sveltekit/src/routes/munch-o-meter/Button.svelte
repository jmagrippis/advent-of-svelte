<script lang="ts">
	let className = ''

	export {className as class}
	export let value: string
	export let disabled = false
</script>

<button
	name="operation"
	{disabled}
	class={`${className} ${
		disabled ? 'pointer-events-none' : ''
	} bg-surface-brand-2 active:duration-50 relative rounded-lg p-2 text-2xl shadow transition duration-300 hover:brightness-125 active:-translate-y-1 disabled:opacity-50`}
	{value}><slot /></button
>

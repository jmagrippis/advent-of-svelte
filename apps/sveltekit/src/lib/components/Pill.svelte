<script lang="ts">
	let className = ''

	export {className as class}
</script>

<span class={`${className} rounded-lg px-2 text-sm font-light text-white`}>
	<slot />
</span>

<script lang="ts">
	export let href: string
</script>

<a
	{href}
	class="transition-filter text-foreground-accent underline duration-300 ease-out hover:brightness-150"
	target="_blank"
	rel="noopener noreferrer"><slot /></a
>

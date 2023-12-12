<script lang="ts">
	import OutboundLink from '$lib/components/OutboundLink.svelte'
	import YouTubeLink from '$lib/components/YouTubeLink.svelte'
</script>

<main class="content-grid gap-y-4 text-xl lg:gap-y-8 lg:text-2xl">
	<h1 class="text-4xl font-bold lg:text-6xl">About</h1>
	<p>
		This demo app full of Christmas cheer is the result of <YouTubeLink
			href="https://kit.svelte.dev/">Johnny’s livestreams</YouTubeLink
		>... Where we take on the <OutboundLink
			href="https://advent.sveltesociety.dev/"
			>Advent of Svelte 2023</OutboundLink
		> coding challenges!
	</p>
	<p>This is the SvelteKit implementation!</p>
</main>

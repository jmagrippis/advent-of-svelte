<script lang="ts">
	import YouTubeIcon from '$lib/icons/YouTube.svelte'
	import GitHubIcon from '$lib/icons/GitHub.svelte'
	import DiscordIcon from '$lib/icons/Discord.svelte'
	import SvelteIcon from '$lib/icons/Svelte.svelte'
	import PulsingHeart from './PulsingHeart.svelte'
</script>

<footer
	class="bg-surface-1 flex shrink-0 items-center justify-center gap-2 py-2 pt-[5svh]"
>
	<div class="flex shrink-0 items-center justify-center gap-2">
		Made with
		<PulsingHeart />
		by <a href="https://magrippis.com">jmagrippis</a>
	</div>

	<a
		href="https://www.youtube.com/@johnnifytech"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Johnny’s YouTube channel"
		class="hover:text-foreground-accent transition-colors duration-300"
	>
		<YouTubeIcon class="w-5" />
	</a>
	<a
		href="https://github.com/jmagrippis/advent-of-svelte"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="checkout the source code at the github repo"
		class="hover:text-foreground-accent transition-colors duration-300"
	>
		<GitHubIcon class="w-5" />
	</a>
	<a
		href="https://discord.gg/eR5Q52Sfm3"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Join Johnny's Discord community!"
		class="hover:text-foreground-accent transition-colors duration-300"
	>
		<DiscordIcon class="w-5" />
	</a>
	<a
		href="https://kit.svelte.dev/"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Check out the SvelteKit project!"
		class="hover:text-foreground-accent text-transparent transition-colors duration-300"
	>
		<SvelteIcon class="w-5" />
	</a>
</footer>

<style>
	footer {
		view-transition-name: footer;
	}
</style>

<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import BeatCounter from './BeatCounter.svelte'
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8">
	<PageTitle>Mistletoe Metronome</PageTitle>

	<p>Tap the button and match the rhythm of your favourite Christmas songs!</p>

	<BeatCounter />
</main>

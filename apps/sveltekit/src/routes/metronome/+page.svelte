<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import BeatCounter from './BeatCounter.svelte'

	const songs = [
		{
			title: 'All I Want For Christmas Is You',
			artist: 'Mariah Carey',
			bpm: 150,
		},
		{
			title: 'Let It Snow! Let It Snow! Let It Snow!',
			artist: 'Dean Martin',
			bpm: 134,
		},
		{
			title: 'Sleigh Ride',
			artist: 'The Ronettes',
			bpm: 92,
		},
	]
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8">
	<PageTitle>Mistletoe Metronome</PageTitle>

	<p>Tap the button and match the rhythm of your favourite Christmas songs!</p>

	<BeatCounter />

	<div>
		<h2 class="mb-4 text-3xl font-bold lg:text-5xl">Famous Christmas BPMs</h2>
		<ul class="flex flex-col gap-2">
			{#each songs as { title, artist, bpm }}
				<li class="lg:flex lg:items-end lg:gap-4">
					<div>
						<strong>{title}</strong> <em>by {artist}</em>
					</div>
					<div class="text-center lg:order-first">
						<strong class="text-4xl">{bpm}</strong> bpm
					</div>
				</li>
			{/each}
		</ul>
	</div>
</main>

<script lang="ts">
	import {onMount} from 'svelte'

	import PageTitle from '$lib/components/PageTitle.svelte'
	import PulsingHeart from '../PulsingHeart.svelte'

	export let data

	let historicalHeartRates: number[] = [data.serverHeartRate]
	$: currentHeartRate = historicalHeartRates[historicalHeartRates.length - 1]

	onMount(() => {
		const ac = new AbortController()
		const signal = ac.signal
		fetch('/api/heart-rate', {signal})
			.then(async (response) => {
				if (!response.ok || !response.body) return

				const reader = response.body
					.pipeThrough(new TextDecoderStream())
					.getReader()

				while (true) {
					const {value, done} = await reader.read()
					if (done) break
					historicalHeartRates = [...historicalHeartRates, Number(value)]
				}
			})
			.catch((error) => {
				if (error.message.includes('aborted')) return
				console.error(error)
			})

		return () => {
			ac.abort()
		}
	})
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8">
	<PageTitle style={'view-transition-name: tracker-header;'}
		>Santa’s Heart Rate Tracker</PageTitle
	>

	<div class="grid items-center md:grid-cols-3">
		<div class="flex justify-center text-9xl md:justify-start">
			<strong>{currentHeartRate}</strong><small class="mb-3 self-end text-lg"
				>bpm</small
			>
		</div>
		<PulsingHeart class="w-full md:col-span-2" animationMode="always" />
	</div>
</main>

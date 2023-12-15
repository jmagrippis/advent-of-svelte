<script lang="ts">
	import {onMount} from 'svelte'

	import PageTitle from '$lib/components/PageTitle.svelte'
	import PulsingHeart from '../PulsingHeart.svelte'
	import {fetchHeartRate} from '@repo/advent-api'
	import Chart from './Chart.svelte'
	import {browser} from '$app/environment'

	export let data

	let historicalHeartRates: number[] = [data.serverHeartRate]
	$: currentHeartRate = historicalHeartRates[historicalHeartRates.length - 1]
	$: latestHeartRates =
		historicalHeartRates.length >= 60
			? historicalHeartRates.slice(historicalHeartRates.length - 60)
			: historicalHeartRates

	let chartWidth: number
	let chartHeight: number
	onMount(() => {
		let ac: AbortController
		const interval = setInterval(async () => {
			ac = new AbortController()
			const signal = ac.signal
			const heartRate = await fetchHeartRate(signal).catch((error) => {
				if (error.message.includes('aborted')) return
				console.error(error)
			})
			if (heartRate) {
				historicalHeartRates = [...historicalHeartRates, heartRate]
			}
		}, 1_000)

		return () => {
			clearInterval(interval)
			if (ac) {
				ac.abort()
			}
		}
	})
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8">
	<PageTitle style={'view-transition-name: tracker-header;'}
		>Santa’s Heart Rate Tracker</PageTitle
	>

	<div class="grid items-center md:grid-cols-3">
		<div class="flex justify-center text-9xl md:justify-start">
			<strong>{currentHeartRate}</strong><small class="self-end text-lg"
				>bpm</small
			>
		</div>
		<PulsingHeart class="w-full md:col-span-2" animationMode="always" />
	</div>

	{#if browser}
		<div
			class="breakout"
			bind:offsetWidth={chartWidth}
			bind:offsetHeight={chartHeight}
		>
			<Chart data={latestHeartRates} width={chartWidth} height={chartHeight} />
		</div>
	{/if}
</main>

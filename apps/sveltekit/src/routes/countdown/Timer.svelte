<script lang="ts">
	import {browser} from '$app/environment'
	import {getTimeDifference, type TimeDifference} from '$lib/getTimeDifference'
	import {onMount} from 'svelte'
	import Unit from './Unit.svelte'

	let christmas: Date
	let now: Date
	$: difference = christmas && now && getTimeDifference(now, christmas)

	onMount(() => {
		christmas = new Date('2023-12-25T00:00:00.000Z')
		now = new Date()

		const interval = setInterval(() => {
			now = new Date()
		}, 1000)

		return () => clearInterval(interval)
	})
</script>

{#if browser && difference}
	<section
		class="breakout grid grid-cols-2 place-items-center items-baseline md:grid-cols-4"
	>
		<Unit value={difference.days} label="days" />
		<Unit value={difference.hours} label="hours" />
		<Unit value={difference.minutes} label="minutes" />
		<Unit value={difference.seconds} label="seconds" />
	</section>
{/if}

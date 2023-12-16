<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import {quintOut} from 'svelte/easing'
	import {derived, writable} from 'svelte/store'
	import {fly} from 'svelte/transition'

	const beats = writable(new Set<string>())
	const bpm = derived(beats, ($beats) => $beats.size)
</script>

<section class="flex flex-col gap-8">
	<div class="flex justify-center text-9xl md:justify-start">
		<strong class="bpm grow">
			{#key $bpm}
				<span
					class="pb-2"
					transition:fly={{
						duration: 100,
						y: 64,
						easing: quintOut,
					}}
				>
					{$bpm}
				</span>
			{/key}
		</strong><small class="self-end text-lg">bpm</small>
	</div>

	<Button
		on:click={() => {
			const timestamp = new Date().toISOString()

			beats.update(($beats) => $beats.add(timestamp))

			setTimeout(() => {
				beats.update(($beats) => {
					$beats.delete(timestamp)
					return $beats
				})
			}, 60_000)
		}}>BEAT!</Button
	>
</section>

<style lang="postcss">
	.bpm {
		display: grid;
		grid-template-areas: 'stack';

		& > * {
			grid-area: stack;
			place-self: center;
		}
	}
</style>

<script lang="ts">
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

	<button
		on:click={() => {
			const timestamp = new Date().toISOString()

			beats.update(($beats) => $beats.add(timestamp))

			setTimeout(() => {
				beats.update(($beats) => {
					$beats.delete(timestamp)
					return $beats
				})
			}, 60_000)
		}}
		class="bg-surface-brand-2 focus:ring-foreground-accent active:duration-50 active:bg-surface-accent-1 relative rounded-lg px-4 py-8 text-5xl shadow transition duration-300 hover:brightness-125 focus:outline-none focus:ring-4 active:-translate-y-1 disabled:opacity-50"
		>BEAT!</button
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

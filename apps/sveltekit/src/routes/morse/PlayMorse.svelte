<script lang="ts">
	import {onMount} from 'svelte'

	import Button from '$lib/components/Button.svelte'
	import SpeakerWave from '$lib/icons/SpeakerWave.svelte'
	import {letterSpacePause, playDash, playDot, wordSpacePause} from '$lib/morse'

	export let morseCode: string
	let audioContext: AudioContext

	onMount(() => {
		audioContext = new AudioContext()
	})

	let isPlaying = false
	let isAskedToStop = false

	const play = async () => {
		isPlaying = true
		for (const character of morseCode) {
			if (isAskedToStop) break
			switch (character) {
				case '.':
					await playDot(audioContext)
					break
				case '-':
					await playDash(audioContext)
					break
				case ' ':
					await letterSpacePause()
					break
				case '/':
					await wordSpacePause()
					break
			}
		}
		isPlaying = false
		isAskedToStop = false
	}
	const stop = () => {
		isAskedToStop = true
	}
</script>

<Button
	disabled={isPlaying}
	on:click={play}
	class="flex items-center gap-4 self-baseline px-8"
	><SpeakerWave /> <span class="shrink-0">Play Morse!</span></Button
>

<button
	class="bg-foreground-accent focus:ring-foreground-accent active:duration-50 relative rounded-lg px-4 py-8 text-5xl shadow transition duration-300 hover:brightness-125 focus:outline-none focus:ring-4 active:-translate-y-1 disabled:pointer-events-none disabled:opacity-50"
	disabled={!isPlaying}
	on:click={stop}>stop</button
>

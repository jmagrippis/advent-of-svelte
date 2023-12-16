<script lang="ts">
	import {textToMorse} from '$lib/morse'

	let value = ''
	$: morseCode = textToMorse(value)
	$: morseCodePerCharacter = morseCode.split(' ')
</script>

<section class="flex flex-col gap-4">
	<label
		for="comment"
		class="flex flex-col gap-4 text-xl font-medium leading-6"
	>
		<h2 class="text-3xl font-bold lg:text-5xl">Your message</h2>
		<textarea
			bind:value
			rows="4"
			placeholder="Your morse code message..."
			class="bg-surface-brand-2 placeholder:text-foreground-brand/50 focus:ring-foreground-brand ring-foreground-accent rounded-md border-0 py-2 shadow-sm ring-2 ring-inset focus:ring-inset"
		/>
	</label>
</section>

<h2 class="mb-4 text-3xl font-bold lg:text-5xl">Morse Code</h2>
{#if morseCode}
	<p
		class="breakout flex flex-wrap items-baseline gap-4 text-4xl font-black tracking-widest"
	>
		{#each morseCodePerCharacter as character}
			<span class="bg-surface-brand-2 rounded-sm px-1">{character}</span>
		{/each}
	</p>
{/if}

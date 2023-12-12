<script lang="ts">
	import Cookie from '$lib/icons/Cookie.svelte'
	import type {EventHandler} from 'svelte/elements'
	import Button from './Button.svelte'
	import {fly} from 'svelte/transition'
	import {quintOut} from 'svelte/easing'

	const operations = [
		{label: '+ Add', value: 'increment'},
		{label: '- Reduce', value: 'decrement'},
		{label: '- Reset', value: 'reset'},
	]

	let count = 0

	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = (event) => {
		const operation = (event.submitter as HTMLButtonElement)?.value
		switch (operation) {
			case 'increment':
				count++
				break
			case 'decrement':
				count--
				break
			case 'reset':
				count = 0
				break
			default:
				break
		}
	}
</script>

<div class="grid grid-cols-2 place-items-center justify-center text-9xl">
	<Cookie class="w-32" />
	<div class="count">
		{#key count}
			<span
				class="pb-2"
				transition:fly={{
					delay: 250,
					duration: 300,
					y: 120,
					easing: quintOut,
				}}
			>
				{count}
			</span>
		{/key}
	</div>
</div>

<form on:submit|preventDefault={handleSubmit} class="grid grid-cols-3 gap-4">
	{#each operations as { label, value }}
		<Button disabled={value === 'decrement' && count <= 0} {value}
			>{label}</Button
		>
	{/each}
</form>

<section class="flex items-center justify-center gap-4 text-2xl">
	<div>Mood 🎅:</div>
	<div>
		{#if count === 0}
			hangry 😡
		{:else if count > 10}
			stuffed 😋
		{:else}
			jolly 😁
		{/if}
	</div>
</section>

<style lang="postcss">
	.count {
		display: grid;
		grid-template-areas: 'stack';

		& > * {
			grid-area: stack;
			place-self: center;
		}
	}
</style>

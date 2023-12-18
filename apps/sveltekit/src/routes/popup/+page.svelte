<script lang="ts">
	import {createDialog, melt} from '@melt-ui/svelte'
	import PageTitle from '$lib/components/PageTitle.svelte'
	import {fade, fly} from 'svelte/transition'
	import {quintOut} from 'svelte/easing'

	import Santa from './santa.png?enhanced'

	const {
		elements: {trigger, overlay, content, title, description, close, portalled},
		states: {open},
	} = createDialog({
		forceVisible: true,
	})
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8">
	<PageTitle>Pop-up!</PageTitle>

	<div class="breakout grid grid-cols-3 place-items-center gap-4 lg:gap-8">
		<enhanced:img
			src={Santa}
			alt="Cartoon representation of Santa’s jolly face"
		/>
		<p class="col-span-2 text-lg lg:text-xl">
			Santa has left a heart-warming message for you...
		</p>
	</div>
	<button
		use:melt={$trigger}
		class="bg-surface-accent-1 focus:ring-foreground-brand self-baseline rounded-xl p-6 text-2xl font-bold shadow transition duration-300 hover:brightness-125 focus:outline-none focus:ring-4 active:-translate-y-1"
	>
		Read Santa’s Message!
	</button>
</main>

<dialog open={$open} use:melt={$portalled}>
	{#if $open}
		<div
			use:melt={$overlay}
			class="fixed inset-0 z-50 bg-black/50 backdrop-blur"
			transition:fade={{duration: 150}}
		/>
		<div
			class="fixed top-1/2 z-50 flex max-h-[85svh] w-[95vw] max-w-prose -translate-x-1/2 -translate-y-1/2 flex-col rounded-xl bg-white p-6 text-xl shadow-lg lg:p-8"
			transition:fly={{
				duration: 300,
				y: 120,
				easing: quintOut,
			}}
			use:melt={$content}
		>
			<h2 use:melt={$title} class="mb-2 text-2xl font-bold text-gray-950">
				Season’s Greetings!
			</h2>
			<div
				use:melt={$description}
				class="mb-5 mt-2 flex flex-col gap-2 leading-relaxed text-gray-600"
			>
				<p>
					In the festive spirit of this joyful season, it’s heart-warming to see
					your passion for programming light up like holiday lights 🌟
				</p>
				<p>
					May your code run as smoothly as a sleigh on snow, and your days be
					filled with the warmth and happiness of this magical time ✨
				</p>

				<p>Warm wishes,</p>
				<p class="self-end">Santa Claus 🎅🎄✨</p>
			</div>

			<button
				use:melt={$close}
				class="bg-surface-brand-2 focus:ring-foreground-brand self-end rounded-xl p-6 text-2xl font-bold shadow transition duration-300 hover:brightness-125 focus:outline-none focus:ring-4 active:-translate-y-1"
			>
				Happy Holidays!
			</button>
			<button
				use:melt={$close}
				aria-label="close"
				class="absolute right-4 top-4 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full p-1 text-gray-950 transition duration-300 hover:bg-red-100 focus:shadow-red-400"
			>
				X
			</button>
		</div>
	{/if}
</dialog>

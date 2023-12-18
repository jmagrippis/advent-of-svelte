<script lang="ts">
	import {page} from '$app/stores'
	import Button from '$lib/components/Button.svelte'
	import Input from '$lib/components/Input.svelte'
	import PageTitle from '$lib/components/PageTitle.svelte'

	export let data

	$: name = $page.url.searchParams.get('name')
</script>

<main class="content-grid grow gap-y-4 text-xl lg:gap-y-8">
	<PageTitle style={'view-transition-name: generator-header;'}
		>Elf Name Generator</PageTitle
	>

	<form
		class="flex flex-col gap-4 self-baseline"
		style={'view-transition-name: generator-form;'}
	>
		<p>
			<strong>Elfify</strong> your name by inputing it below and getting legit elf
			names approved by Santa’s most diligent helpers!
		</p>
		<!-- linter can't "see" the input inside the Input component -->
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="mb-4 grid grow items-center gap-2 md:grid-cols-3">
			<span>Your name:</span>
			<span class="flex items-center gap-4 md:col-span-2">
				<Input
					class="py-6"
					name="name"
					value={name}
					placeholder="Your full name"
				/>
			</span>
		</label>
		<Button>Elfify</Button>
	</form>
	<section>
		<h2
			class="mb-4 text-3xl font-bold lg:text-5xl"
			style="view-transition-name: generator-results-header;"
		>
			{#if name}
				Suggested
			{:else}
				Random
			{/if}
			Elf Names
		</h2>
		<ul class="flex flex-col gap-1 lg:text-3xl">
			{#each data.elfNames as name}
				<li class="decoration-foreground-accent underline decoration-wavy">
					{name}
				</li>
			{/each}
		</ul>
	</section>
</main>

<style lang="postcss">
	:global(::view-transition-old(generator-header)):only-child,
	:global(::view-transition-old(generator-form)):only-child,
	:global(::view-transition-old(generator-results-header)):only-child {
		animation: 300ms ease-out both fade-out-to-left;
	}

	:global(::view-transition-new(generator-header)):only-child,
	:global(::view-transition-new(generator-form)):only-child,
	:global(::view-transition-new(generator-results-header)):only-child {
		animation: 300ms ease-out both slide-from-right;
	}

	/* "back" navigation */
	:global(:root[data-back]::view-transition-old(generator-header)):only-child,
	:global(:root[data-back]::view-transition-old(generator-form)):only-child,
	:global(
			:root[data-back]::view-transition-old(generator-results-header)
		):only-child {
		pointer-events: none;
		animation: 300ms ease-out both fade-out-to-right;
	}

	:global(:root[data-back]::view-transition-new(generator-header)):only-child,
	:global(:root[data-back]::view-transition-new(generator-form)):only-child,
	:global(
			:root[data-back]::view-transition-new(generator-results-header)
		):only-child {
		pointer-events: none;
		animation: 300ms ease-out both slide-from-left;
	}
</style>

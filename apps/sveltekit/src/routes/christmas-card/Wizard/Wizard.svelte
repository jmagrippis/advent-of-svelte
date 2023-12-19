<script lang="ts">
	import {goto} from '$app/navigation'
	import {page} from '$app/stores'
	import Button from '$lib/components/Button.svelte'

	type EnhancedImage = {
		img: {h: number; w: number; src: string}
		sources: {avif: string; webp: string; png: string}
	}
	type EnhancedImageImport = {default: EnhancedImage}
	const Stickers = import.meta.glob<EnhancedImageImport>('./stickers/*.png', {
		eager: true,
		query: {
			enhanced: true,
		},
	})

	const addStickerToCard = async (stickerIndex: number) => {
		const nextSelectedIndices = [...cardStickerIndices, stickerIndex]
		const nextSelectedQueryParams = nextSelectedIndices.map(
			(index) => `selected=${index}`,
		)
		await goto(`?${nextSelectedQueryParams.join('&')}`, {
			noScroll: true,
			keepFocus: true,
		})
	}

	$: ImageImports = Object.values(Stickers)
	$: cardStickerIndices = $page.url.searchParams.getAll('selected').map(Number)
	$: cardStickers = cardStickerIndices.map(
		(index) => ImageImports[index].default,
	)
</script>

<div class="grid place-items-center gap-2 lg:grid-cols-3">
	<aside>
		<ul class="flex gap-1 lg:grid lg:grid-cols-4">
			{#each ImageImports as StickerImport, index}
				<li
					draggable="true"
					on:dragstart={(event) => {
						event.dataTransfer?.setData('text/plain', `${index}`)
					}}
				>
					<button
						class="focus:ring-foreground-accent rounded focus:outline-none focus:ring-2"
						on:click={() => {
							addStickerToCard(index)
						}}
					>
						<enhanced:img src={StickerImport.default} alt="Sticker" />
					</button>
				</li>
			{/each}
		</ul>
	</aside>

	<section
		on:dragenter|preventDefault
		on:dragover|preventDefault
		on:drop|preventDefault={async (event) => {
			const data = event.dataTransfer?.getData('text/plain')
			if (!data) return
			const stickerIndex = parseInt(data)
			await addStickerToCard(stickerIndex)
		}}
		role="region"
		tabindex="-1"
		class="mx-auto grid aspect-square h-[50svh] grid-cols-6 place-items-center overflow-y-clip rounded bg-gray-50 text-gray-950 lg:col-span-2"
	>
		{#each cardStickers as Image}
			<div>
				<enhanced:img src={Image} alt="Selected Sticker" />
			</div>
		{/each}
	</section>
</div>

<Button
	on:click={() => {
		goto($page.url.pathname)
	}}>Start over</Button
>

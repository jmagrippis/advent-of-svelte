<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import EncoderDecoder from './EncoderDecoder.svelte'
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8">
	<PageTitle>Morse Code Translator</PageTitle>

	<p>
		Input your message, and see it translated into Morse Code! You may use
		<strong>letters</strong> (A-Z), <strong>numbers</strong> (0-9) and
		<strong>spaces</strong> ( ).
	</p>

	<EncoderDecoder />
</main>

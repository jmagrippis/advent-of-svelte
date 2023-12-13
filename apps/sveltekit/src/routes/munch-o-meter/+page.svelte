<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'
	import Meter from './Meter.svelte'
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8">
	<PageTitle>Merry Munch-o-Meter</PageTitle>

	<p>Track Santa’s cookie consumption, and see his current mood!</p>

	<Meter />
</main>

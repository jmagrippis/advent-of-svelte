<script lang="ts">
	import {snowfall} from '$lib/actions/snowfall'
	import PageTitle from '$lib/components/PageTitle.svelte'
</script>

<main class="content-grid grow gap-y-4 lg:gap-y-8" use:snowfall>
	<PageTitle>Snowfall Symphony</PageTitle>
	<p>Shake your mouse to make it snow!</p>
</main>

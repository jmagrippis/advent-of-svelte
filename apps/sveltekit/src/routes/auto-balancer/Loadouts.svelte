<script lang="ts">
	import type {Loadout as LoadoutType} from './+page.server'
	import Loadout from './Loadout.svelte'

	export let loadouts: LoadoutType[]
</script>

<div class="grid grid-cols-2 gap-4 text-lg sm:grid-cols-3 md:grid-cols-4">
	{#each loadouts as loadout}
		<Loadout {loadout} />
	{/each}
</div>

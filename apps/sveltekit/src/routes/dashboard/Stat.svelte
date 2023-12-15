<script lang="ts">
	export let value: number
	export let label: string

	const formatter = new Intl.NumberFormat('en-GB', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	})
</script>

<div>
	<div class="font-medium">{formatter.format(value)}</div>
	<div class="text-lg font-light">{label}</div>
</div>

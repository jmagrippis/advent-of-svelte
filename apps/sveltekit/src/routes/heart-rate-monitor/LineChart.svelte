<script lang="ts">
	import * as d3 from 'd3'

	export let data: number[]
	export let width = 640
	export let height = 400
	export let marginTop = 20
	export let marginRight = 20
	export let marginBottom = 30
	export let marginLeft = 40

	let gx: SVGElement
	let gy: SVGElement

	$: minMaxedData = [65, 80, ...data]

	$: x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight])
	// @ts-ignore minMaxedData IS at least two numbers
	$: y = d3.scaleLinear(d3.extent(minMaxedData), [
		height - marginBottom,
		marginTop,
	])
	$: line = d3.line((d, i) => x(i), y)
	$: d3.select(gy as SVGSVGElement).call(d3.axisLeft(y))
	$: d3.select(gx as SVGSVGElement).call(d3.axisBottom(x))
</script>

<svg {width} {height}>
	<g bind:this={gx} transform="translate(0,{height - marginBottom})" />
	<g bind:this={gy} transform="translate({marginLeft},0)" />
	<path
		fill="none"
		class="stroke-foreground-brand/10"
		stroke-width="1.5"
		d={line(data)}
	/>
	<g fill="white" stroke="currentColor" stroke-width="1.5">
		{#each data as d, i}
			<circle
				stroke-width="0"
				cx={x(i)}
				cy={y(d)}
				r="3"
				class="fill-foreground-accent"
			/>
		{/each}
	</g>
</svg>

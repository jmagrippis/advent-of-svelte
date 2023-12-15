<script lang="ts">
	import * as d3 from 'd3'

	export let data: [string, {tasksCompleted: number}][]

	let chart: SVGElement

	export let width: number
	export let height: number

	$: x = d3
		.scaleBand()
		.domain(data.map((d) => d[0]))
		.range([0, width])
		.padding(0.15)

	$: y = d3
		.scaleLinear()
		// @ts-ignore data always have at least one item
		.domain([0, d3.max(data, ([, {tasksCompleted}]) => tasksCompleted)])
		.range([height, 0])

	$: d3.select(chart)
		.append('g')
		.attr('transform', 'translate(0,' + height + ')')
		.call(d3.axisBottom(x))

	$: d3.select(chart).append('g').call(d3.axisLeft(y))

	$: {
		const svg = d3.select(chart)

		svg
			.select('g')
			.attr('transform', 'translate(0,' + height + ')')
			// @ts-ignore seems to work
			.call(d3.axisBottom(x))

		// @ts-ignore seems to work
		svg.select('g').call(d3.axisLeft(y))

		const bars = svg.selectAll('rect').data(data)

		bars
			.enter()
			.append('rect')
			.attr('class', 'fill-surface-brand-2 hover:fill-surface-accent-1')
			.attr('rx', 4)
			// @ts-ignore seems to work
			.merge(bars) // merge the new elements with the existing ones
			.attr('x', (d) => x(d[0]) ?? null)
			.attr('y', (d) => y(d[1].tasksCompleted))
			.attr('width', x.bandwidth())
			.attr('height', (d) => height - y(d[1].tasksCompleted))

		bars.exit().remove() // remove any old elements that are no longer in the data
	}
</script>

<svg {width} {height} bind:this={chart}></svg>

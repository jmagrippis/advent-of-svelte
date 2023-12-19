import type {Action} from 'svelte/action'
import './snowfall.css'
import {flakes} from './flakes'

const colors = ['#67e8f9', '#5eead4', '#ddd6fe', '#fff1f2']

const randomInteger = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min
const randomElementFromArray = <T>(array: T[]) =>
	array[Math.floor(Math.random() * array.length)]

const generateFlake = () => {
	const svgFlakeData = flakes[Math.floor(Math.random() * flakes.length)]
	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
	svg.setAttribute('viewBox', svgFlakeData.viewBox)
	svg.setAttribute('fill', 'currentColor')
	const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
	svgPath.setAttribute('d', svgFlakeData.path)
	svg.appendChild(svgPath)

	const flake = document.createElement('span')
	flake.classList.add('snowfall-flake')

	const flakeSize = randomInteger(8, 20)
	flake.style.setProperty('--flake-size', `${flakeSize}px`)
	const color = randomElementFromArray(colors)
	flake.style.setProperty('--flake-color', color)
	flake.appendChild(svg)

	return flake
}

export const snowfall: Action = (node) => {
	let prevX: number | null = null
	let prevY: number | null = null
	let distanceSinceLastSpawn = 0

	const handleMousemove = (event: MouseEvent) => {
		// calculate distance travelled
		if (prevX !== null && prevY !== null) {
			const dx = event.clientX - prevX
			const dy = event.clientY - prevY
			const distance = Math.sqrt(dx * dx + dy * dy)
			distanceSinceLastSpawn += distance
		}

		prevX = event.clientX
		prevY = event.clientY

		if (distanceSinceLastSpawn < 30) return
		distanceSinceLastSpawn = 0

		const flake = generateFlake()
		flake.style.left = `${event.clientX}px`
		flake.style.top = `${event.clientY}px`
		const duration = randomInteger(1500, 3000)
		flake.style.setProperty('--duration', `${duration}ms`)

		node.appendChild(flake)

		setTimeout(() => {
			node.removeChild(flake)
		}, duration)
	}

	node.addEventListener('mousemove', handleMousemove, false)

	return {
		destroy: () => {
			node.removeEventListener('mousemove', handleMousemove, false)
		},
	}
}

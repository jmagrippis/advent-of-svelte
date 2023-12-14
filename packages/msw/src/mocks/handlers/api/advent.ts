import {HttpResponse, http} from 'msw'

const kids = [
	{name: 'Emma', tally: 32},
	{name: 'Ethan', tally: 14},
	{name: 'Isabella', tally: 70},
	{name: 'Jayden', tally: -16},
	{name: 'Isabella', tally: -59},
	{name: 'Noah', tally: 19},
	{name: 'Mia', tally: -37},
	{name: 'Will', tally: -20},
	{name: 'Sam', tally: -91},
	{name: 'Brittney', tally: -98},
]

const presents = [
	{name: 'Kurtis', weight: 8.2},
	{name: 'Branson', weight: 4.31},
	{name: 'Danielle', weight: 7.4},
	{name: 'Elena', weight: 4.14},
	{name: 'Rahul', weight: 32.6},
	{name: 'Wanda', weight: 7.04},
	{name: 'Claud', weight: 4.93},
	{name: 'Max', weight: 12.34},
	{name: 'Amy', weight: 4.12},
	{name: 'Rich', weight: 42.12},
	{name: 'Phil', weight: 100},
]

export const adventApiHandlers = [
	http.get('https://advent.sveltesociety.dev/data/2023/day-one.json', () =>
		HttpResponse.json(kids),
	),
	http.get('https://advent.sveltesociety.dev/data/2023/day-three.json', () =>
		HttpResponse.json(presents),
	),
]

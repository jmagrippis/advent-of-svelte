'use client'

import {FormEventHandler, useState} from 'react'
import {Cookie} from './Cookie'
import {Button} from '@/components/ui/button'

const operations = [
	{label: '+ Add', value: 'increment'},
	{label: '- Reduce', value: 'decrement'},
	{label: '- Reset', value: 'reset'},
]

export const Meter = () => {
	const [count, setCount] = useState(0)
	const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault()
		// the event does have a submitter!
		// @ts-ignore
		const submitButton: HTMLButtonElement = event.nativeEvent.submitter
		const operation = submitButton?.value

		switch (operation) {
			case 'increment':
				setCount((c) => c + 1)
				break
			case 'decrement':
				setCount((c) => c - 1)
				break
			case 'reset':
				setCount(0)
				break
			default:
				break
		}
	}
	return (
		<>
			<div className="grid grid-cols-2 place-items-center justify-center text-9xl">
				<Cookie className="w-32" />
				<div>{count}</div>
			</div>

			<form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
				{operations.map(({label, value}) => (
					<Button
						name="operation"
						key={label}
						disabled={value === 'decrement' && count <= 0}
						value={value}
					>
						{label}
					</Button>
				))}
			</form>

			<section className="flex items-center justify-center gap-4 text-2xl">
				<div>Mood 🎅:</div>
				<div>
					{count === 0 ? (
						<>hangry 😡</>
					) : count > 10 ? (
						<>stuffed 😋</>
					) : (
						<>jolly 😁</>
					)}
				</div>
			</section>
		</>
	)
}

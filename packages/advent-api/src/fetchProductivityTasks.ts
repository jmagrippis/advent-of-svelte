type TaskType = 'CREATED_TOY' | 'WRAPPED_PRESENT'

export type Task = {
	elf: string
	task: TaskType
	minutesTaken: number
	date: string
}
export const fetchProductivityTasks = async (): Promise<Task[]> => {
	const response = await fetch(
		'https://advent.sveltesociety.dev/data/2023/day-five.json',
	)
	if (response.ok) {
		return response.json()
	} else {
		throw Error('Could not fetch productivity events')
	}
}

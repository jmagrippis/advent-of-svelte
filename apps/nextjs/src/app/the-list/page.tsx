import {NaughtyOrNiceTracker} from './NaughtyOrNiceTracker'

type Props = {
	searchParams?: {
		query?: string
		status?: string
	}
}
const TheList = ({searchParams}: Props) => {
	const query = searchParams?.query
	const status = searchParams?.status

	return (
		<main className="content-grid grow gap-y-4 lg:gap-y-8">
			<h1 className="text-4xl font-bold lg:text-6xl">
				Naughty or Nice Tracker
			</h1>

			<NaughtyOrNiceTracker query={query} status={status} />
		</main>
	)
}

export default TheList

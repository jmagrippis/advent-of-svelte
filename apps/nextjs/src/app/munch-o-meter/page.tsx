import type {Metadata} from 'next'
import {Meter} from './Meter'

const title = 'Merry Munch-o-Meter'
const description =
	'Track Santa’s cookie consumption, and see his mood! Is it jolly?!'

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
	},
}

const MunchOMeter = () => (
	<main className="content-grid grow gap-y-4 lg:gap-y-8">
		<h1 className="text-4xl font-bold lg:text-6xl">Merry Munch-o-Meter</h1>
		<p>Track Santa’s cookie consumption, and see his current mood!</p>

		<Meter />
	</main>
)

export default MunchOMeter

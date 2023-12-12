/**
 * First version of this
 * code was generated by v0 by Vercel.
 * @see https://v0.dev/t/qcxQUXSj0L0
 */
import {Input} from '@/components/ui/input'
import {Pill} from '../../components/ui/Pill'
import {fetchKidsWithTallies} from '@repo/advent-api'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

type Props = {query?: string; status?: string}
export const NaughtyOrNiceTracker = async ({query, status}: Props) => {
	const kids = await fetchKidsWithTallies({query, status})

	return (
		<section className="flex flex-col items-center">
			<div className="flex w-full flex-col gap-4">
				<search>
					<form>
						<label className="grid grow items-center gap-2 md:grid-cols-3">
							<span>Search by name:</span>
							<span className="flex items-center gap-4 md:col-span-2">
								<Input name="query" defaultValue={query} placeholder="timmy" />
								<button>
									<span className="sr-only">execute search</span>{' '}
									<MagnifyingGlassIcon className="h-7 w-7" />
								</button>
							</span>
						</label>
					</form>
				</search>

				<ul className="flex flex-col gap-1">
					{kids.map(({name, tally}) => (
						<li
							key={`${name}-${tally}`}
							className="flex items-center justify-between"
						>
							<div>
								<strong>{name}</strong>: <span>{tally} good deeds</span>
							</div>
							<span></span>
							{tally >= 0 ? (
								<Pill className="bg-primary-600">Nice 👼</Pill>
							) : (
								<Pill className="bg-secondary-600">Naughty 😈</Pill>
							)}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
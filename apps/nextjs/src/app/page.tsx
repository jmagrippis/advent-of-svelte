import Link from 'next/link'

export default function Page(): React.ReactNode {
	return (
		<main className="content-grid gap-y-4 text-xl lg:gap-y-8 lg:text-2xl">
			<h1 className="text-5xl font-bold">Happy holidays!</h1>
			<Link className="decoration-foreground-accent underline" href="/the-list">
				Naughty or Nice Tracker
			</Link>
		</main>
	)
}

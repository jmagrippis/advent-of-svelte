import './globals.css'
import type {Metadata} from 'next'
import {Raleway} from 'next/font/google'

const sansFont = Raleway({
	subsets: ['latin'],
	variable: '--font-sans',
})

const metaDescription =
	'Next.js implementations of the Advent of Svelte challenges for 2023!'
export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_ROOT_URL || process.env.VERCEL_URL
			? `https://${process.env.NEXT_PUBLIC_ROOT_URL ?? process.env.VERCEL_URL}`
			: `http://localhost:${process.env.PORT || 3000}`,
	),
	title: {
		default: 'Advent of Svelte... with NextJS!',
		template: '%s | Advent of Svelte',
	},
	description: metaDescription,
	openGraph: {
		title: 'Advent of Svelte... with NextJS!',
		description: metaDescription,
		type: 'website',
		siteName: 'Advent of Svelte... with NextJS!',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}): JSX.Element {
	return (
		<html
			lang="en"
			// data-theme will appear on the client
			suppressHydrationWarning
		>
			<head>
				{/* eslint-disable @next/next/no-sync-scripts */}
				<script src="/theme-toggle.js" />
			</head>
			<body className={sansFont.variable}>{children}</body>
		</html>
	)
}

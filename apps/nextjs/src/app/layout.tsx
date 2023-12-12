import './globals.css'
import type {Metadata} from 'next'
import {Raleway} from 'next/font/google'

const sansFont = Raleway({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'Advent of Svelte... with NextJS!',
	description:
		'Next.js implementations of the Advent of Svelte challenges for 2023!',
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

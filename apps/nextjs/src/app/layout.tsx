import '@repo/css/globals.css'
import type {Metadata} from 'next'
import {Trispace} from 'next/font/google'

const sansFont = Trispace({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'Advent of Svelte... in NextJS',
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
			className={sansFont.variable}
			// data-theme will appear on the client
			suppressHydrationWarning
		>
			<head>
				{/* eslint-disable @next/next/no-sync-scripts */}
				<script src="/theme-toggle.js" />
			</head>
			<body className="bg-red-200">{children}</body>
		</html>
	)
}

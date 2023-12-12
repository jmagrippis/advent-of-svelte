import {ImageResponse} from 'next/og'
import {headers} from 'next/headers'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const contentType = 'image/png'
export const size = {
	width: 1200,
	height: 630,
}
export const alt = 'Advent of Svelte... with NextJS!'

const baseUrl =
	process.env.NEXT_PUBLIC_ROOT_URL || process.env.VERCEL_URL
		? `https://${process.env.NEXT_PUBLIC_ROOT_URL ?? process.env.VERCEL_URL}`
		: `http://localhost:${process.env.PORT || 3000}`

const OG = async () => {
	const sansFont = fetch(
		new URL('../fonts/Raleway-Medium.ttf', import.meta.url),
	).then((res) => res.arrayBuffer())
	const headersList = headers()

	const mascotUrl = new URL('/android-chrome-512x512.png', baseUrl)

	return new ImageResponse(
		(
			<div
				style={{
					backgroundImage: 'linear-gradient(to top, #059669, #a7f3d0)',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: 16,
					flexDirection: 'column',
				}}
			>
				<div
					style={{
						backgroundImage: 'linear-gradient(to bottom, #1a171c, #0d0b0f)',
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						padding: 48,
						borderRadius: 16,
						gap: 32,
					}}
				>
					<div
						style={{
							fontSize: 48,
							backgroundImage: 'linear-gradient(to bottom, #10b981, #e9d5ff)',
							backgroundClip: 'text',
							color: 'transparent',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'column',
						}}
					>
						{/* No need for optimised image or alt text here, */}
						{/* this is embedded in a bigger image! */}
						{/* eslint-disable @next/next/no-img-element */}
						{/* eslint-disable jsx-a11y/alt-text */}
						<img width={256} height={256} src={mascotUrl.toString()}></img>
						<div
							style={{
								fontSize: 78,
								backgroundImage: 'linear-gradient(to bottom, #059669, #a7f3d0)',
								backgroundClip: 'text',
								color: 'transparent',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								flexDirection: 'column',
							}}
						>
							Advent of Svelte
						</div>
						<div
							style={{
								fontSize: 56,
								backgroundImage: 'linear-gradient(to bottom, #be123c, #fecdd3)',
								backgroundClip: 'text',
								color: 'transparent',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								flexDirection: 'column',
							}}
						>
							with NextJS!
						</div>
					</div>
				</div>
			</div>
		),
		{
			...size,
			emoji: 'noto',
			fonts: [
				{
					name: 'Raleway',
					data: await sansFont,
					style: 'normal',
					weight: 500,
				},
			],
		},
	)
}

export default OG

// problems with deploying this sadly
// Error: The Edge Function "fn" is referencing unsupported modules:
// - index.js: vc-blob-asset:./noto-sans-v27-latin-regular.ttf
// TODO: raise issue?

import type {RequestHandler} from '@sveltejs/kit'
import {ImageResponse} from '@vercel/og'

export const GET: RequestHandler = async ({url, fetch}) => {
	const sansFont = await fetch('/fonts/Raleway-Medium.ttf').then((res) =>
		res.arrayBuffer(),
	)

	const mascotUrl = new URL('/android-chrome-512x512.png', url)

	const html = {
		type: 'div',
		key: null,
		props: {
			children: {
				type: 'div',
				props: {
					children: [
						{
							type: 'img',
							props: {
								width: 256,
								height: 256,
								src: mascotUrl.toString(),
							},
						},
						{
							type: 'div',
							props: {
								children: 'Advent of Svelte',
								style: {
									fontSize: 78,
									backgroundImage:
										'linear-gradient(to bottom, #059669, #a7f3d0)',
									backgroundClip: 'text',
									color: 'transparent',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'column',
								},
							},
						},
						{
							type: 'div',
							props: {
								children: 'with SvelteKit!',
								style: {
									fontSize: 56,
									backgroundImage:
										'linear-gradient(to bottom, #be123c, #fecdd3)',
									backgroundClip: 'text',
									color: 'transparent',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'column',
								},
							},
						},
					],
					style: {
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
					},
				},
			},
			style: {
				backgroundImage: 'linear-gradient(to top, #059669, #a7f3d0)',
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 16,
				flexDirection: 'column',
			},
		},
	}

	return new ImageResponse(html, {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: 'Raleway',
				data: sansFont,
				style: 'normal',
				weight: 500,
			},
		],
	})
}

import {z} from 'zod'
import type {Actions, PageServerLoad} from './$types'
import {error} from '@sveltejs/kit'

export type CardStatus = 'hidden' | 'picked' | 'matched'
export type GameCard = {
	face: number
	status: CardStatus
}

export const load: PageServerLoad = async ({cookies}) => {
	let board: GameCard[]
	const boardCookie = cookies.get('memory-game-board')

	if (!boardCookie) {
		const cards: GameCard[] = [...Array(24).keys()].map((index) => ({
			face: index + 1,
			status: 'hidden',
		}))
		board = [...cards, ...cards].sort(() => Math.random() - 0.5)
		cookies.set('memory-game-board', JSON.stringify(board), {path: ''})
	} else {
		board = JSON.parse(boardCookie)
	}

	return {
		board,
		meta: {
			title: 'Deck of Doubles Memory Game',
			description:
				'Test your memory and compete for high scores and fast times, in a memory game featuring Santa’s unique Deck of Doubles!',
		},
	}
}

const CardSchema = z.coerce.number()

export const actions = {
	reveal: async ({cookies, request}) => {
		const boardCookie = cookies.get('memory-game-board')
		if (!boardCookie) {
			error(400, 'Could not find your game board')
		}
		const gameBoard = JSON.parse(boardCookie) as GameCard[]
		const data = await request.formData()
		const validation = CardSchema.safeParse(data.get('index'))

		if (!validation.success) {
			error(400, validation.error)
		}

		const cardIndex = validation.data
		const pickedCard = gameBoard[cardIndex]

		const alreadyPickedCardIndex = gameBoard.findIndex(
			({status}) => status === 'picked',
		)

		let outcome: 'miss' | 'match' | null = null

		if (alreadyPickedCardIndex >= 0) {
			const alreadyPickedCard = gameBoard[alreadyPickedCardIndex]
			if (alreadyPickedCard.face === pickedCard.face) {
				gameBoard[cardIndex].status = 'matched'
				alreadyPickedCard.status = 'matched'
				outcome = 'match'
			} else {
				gameBoard[cardIndex].status = 'hidden'
				alreadyPickedCard.status = 'hidden'
				outcome = 'miss'
			}
		} else {
			gameBoard[cardIndex].status = 'picked'
		}

		cookies.set('memory-game-board', JSON.stringify(gameBoard), {path: ''})

		return {outcome}
	},
	new: async ({cookies}) => {
		cookies.delete('memory-game-board', {path: ''})
	},
} satisfies Actions

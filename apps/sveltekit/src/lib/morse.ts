import {delay} from './delay'

const letterToMorse: Record<string, string> = {
	// letters
	A: '.-',
	B: '-...',
	C: '-.-.',
	D: '-..',
	E: '.',
	F: '..-.',
	G: '--.',
	H: '....',
	I: '..',
	J: '.---',
	K: '-.-',
	L: '.-..',
	M: '--',
	N: '-.',
	O: '---',
	P: '.--.',
	Q: '--.-',
	R: '.-.',
	S: '...',
	T: '-',
	U: '..-',
	V: '...-',
	W: '.--',
	X: '-..-',
	Y: '-.--',
	Z: '--..',
	// numbers
	'0': '-----',
	'1': '.----',
	'2': '..---',
	'3': '...--',
	'4': '....-',
	'5': '.....',
	'6': '-....',
	'7': '--...',
	'8': '---..',
	'9': '----.',
	// space
	' ': '/',
}

export const textToMorse = (text: string): string =>
	text
		.split('')
		.map((char) => {
			const morse = letterToMorse[char.toUpperCase()]
			if (!morse) {
				return ''
			}
			return morse + ' '
		})
		.join('')
		.trim()

const DotLength = 55
const DashLength = DotLength * 3
const LetterSpaceLength = DotLength * 3
const WordSpaceLength = DotLength * 7

export const play = async (audioContext: AudioContext, length: number) => {
	const oscillator = audioContext.createOscillator()
	const gainNode = audioContext.createGain()
	oscillator.connect(gainNode)
	gainNode.connect(audioContext.destination)
	oscillator.start(0)

	setTimeout(() => {
		const stopDelaySeconds = 0.1
		gainNode.gain.exponentialRampToValueAtTime(
			0.00001,
			audioContext.currentTime + stopDelaySeconds,
		)

		oscillator.stop(audioContext.currentTime + stopDelaySeconds)
	}, length)

	return delay(length)
}

export const playDot = async (audioContext: AudioContext) => {
	await play(audioContext, DotLength)
	return delay(DotLength)
}

export const playDash = async (audioContext: AudioContext) => {
	await play(audioContext, DashLength)
	return delay(DotLength)
}

export const letterSpacePause = () => delay(LetterSpaceLength)
export const wordSpacePause = () => delay(WordSpaceLength)

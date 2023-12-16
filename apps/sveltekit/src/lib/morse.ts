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

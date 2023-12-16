import {expect, it, describe} from 'vitest'
import {textToMorse} from './morse'

describe('textToMorse', () => {
	it('`a` translates to `.-`', () => {
		const morse = textToMorse('a')

		expect(morse).toBe('.-')
	})

	it('accounts for spaces', () => {
		const morseA = textToMorse(' ')

		expect(morseA).toBe('/')

		const morseB = textToMorse('e e')

		expect(morseB).toBe('. / .')
	})

	it('is case insensitive', () => {
		expect(textToMorse('NO NEED TO SHOUT')).toBe(
			textToMorse('no need to shout'),
		)
	})

	it('can parse "Hello World" correctly', () => {
		const morse = textToMorse('Hello World')

		expect(morse).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')
	})

	it('can parse numbers', () => {
		const morseA = textToMorse('42')

		expect(morseA).toBe('....- ..---')

		const morseB = textToMorse('7')

		expect(morseB).toBe('--...')
	})
})

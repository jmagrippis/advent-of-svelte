<script lang="ts">
	import Back from './back.png?enhanced'

	const CardFaces = import.meta.glob<{default: string}>('./faces/*.png', {
		eager: true,
		query: {
			enhanced: true,
		},
	})

	export let face: number
	export let value: string
	export let revealed: boolean
	export let shaking: boolean

	$: Face =
		CardFaces[`./faces/${face}.png`] && CardFaces[`./faces/${face}.png`].default
</script>

<button
	name="index"
	{value}
	class="focus:ring-foreground-accent relative flex aspect-[2/3] h-full w-full rounded-xl ring-offset-transparent transition-transform duration-300 focus:ring-2 focus:ring-offset-2"
	class:revealed
	class:shaking
	disabled={revealed}
>
	<div class="front absolute h-full w-full rounded shadow">
		<enhanced:img
			src={Face}
			alt={`Card ${face} of the Deck of Doubles`}
			class="h-full w-full"
		/>
	</div>
	<div class="back absolute h-full w-full rounded shadow">
		<enhanced:img
			class="border-foreground-brand h-full w-full rounded-xl border"
			src={Back}
			alt="The back of a card from the Deck of Doubles"
		/>
	</div>
</button>

<style lang="postcss">
	button {
		--shake-amount: 10%;
		--shake-duration: 0.3s;

		transform-style: preserve-3d;
		transform: rotateY(0deg);
	}

	button.revealed {
		transform: rotateY(180deg);
	}

	.front,
	.back {
		backface-visibility: hidden;
	}

	.front {
		transform: rotateY(180deg);
	}

	.shaking .back {
		animation: shake var(--shake-duration) ease-in-out infinite;
	}

	.shaking .front {
		animation: shakeRotated var(--shake-duration) ease-in-out infinite;
	}

	@keyframes shake {
		0%,
		100% {
			transform: translateX(0);
		}
		25%,
		75% {
			transform: translateX(var(--shake-amount));
		}
		50% {
			transform: translateX(calc(var(--shake-amount) * -1));
		}
	}

	@keyframes shakeRotated {
		0%,
		100% {
			transform: translateX(0) rotateY(180deg);
		}
		25%,
		75% {
			transform: translateX(var(--shake-amount)) rotateY(180deg);
		}
		50% {
			transform: translateX(calc(var(--shake-amount) * -1)) rotateY(180deg);
		}
	}
</style>

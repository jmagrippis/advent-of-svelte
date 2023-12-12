import {YouTube} from '@/components/icons/YouTube'
import {GitHub} from '@/components/icons/GitHub'
import {Discord} from '@/components/icons/Discord'
import {PulsingHeart} from './PulsingHeart'

export const Footer = () => (
	<footer className="bg-surface-1 mt-[5vh] flex items-center justify-center gap-2 py-2">
		<div className="flex shrink-0 items-center justify-center gap-2">
			Made with
			<PulsingHeart />
			by <a href="https://magrippis.com">jmagrippis</a>
		</div>

		<a
			href="https://www.youtube.com/@johnnifytech"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Johnny’s YouTube channel"
			className="hover:text-foreground-accent transition-colors duration-300"
		>
			<YouTube className="w-5" />
		</a>
		<a
			href="https://github.com/jmagrippis/advent-of-svelte"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="checkout the source code at the github repo"
			className="hover:text-foreground-accent transition-colors duration-300"
		>
			<GitHub className="w-5" />
		</a>
		<a
			href="https://discord.gg/eR5Q52Sfm3"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Join Johnny's Discord community!"
			className="hover:text-foreground-accent transition-colors duration-300"
		>
			<Discord className="w-5" />
		</a>
	</footer>
)

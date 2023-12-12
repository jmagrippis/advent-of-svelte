'use client'

import Image from 'next/image'
import {usePathname} from 'next/navigation'
import elfbot from '@/images/elfbot.png'
import Link from 'next/link'
import {ThemeToggleIcon} from './ThemeToggleIcon/ThemeToggleIcon'

const activePageClasses =
	'underline decoration-foreground-accent decoration-dashed decoration-2'

export const Header = () => {
	const pathname = usePathname()

	const TitleElement = pathname === '/' ? 'h1' : 'span'
	return (
		<header className="bg-surface-brand-1/80 sticky top-0 z-50 mb-[5vh] backdrop-blur">
			<nav className="flex items-center justify-between px-2 py-4 sm:px-4">
				<a
					href="/"
					className={`hover:text-foreground-accent flex items-center gap-4 font-bold transition-colors duration-300 ${
						pathname === '/' ? activePageClasses : ''
					}`}
				>
					<Image
						className={`w-6 ${pathname !== '/' ? 'saturate-50' : ''}`}
						src={elfbot}
						alt="Elfbot, Santa’s robotic elf helper!"
					/>
					<TitleElement className="inline-block">Advent of Svelte</TitleElement>
				</a>
				<div className="flex gap-4">
					<ul className="flex gap-4">
						<li>
							<Link
								href="/about"
								className={`hover:text-foreground-accent transition-colors duration-300 ${
									pathname.startsWith('/about') ? activePageClasses : ''
								}`}
							>
								about
							</Link>
						</li>
					</ul>
					<button
						className="hover:text-foreground-accent transition-colors duration-300"
						aria-label="toggle theme"
						aria-live="polite"
						onClick={(event) => {
							event.preventDefault()
							window.toggleTheme && window.toggleTheme()
						}}
					>
						<span className="sr-only">toggle theme</span>
						<ThemeToggleIcon className="w-6" />
					</button>
				</div>
			</nav>
		</header>
	)
}

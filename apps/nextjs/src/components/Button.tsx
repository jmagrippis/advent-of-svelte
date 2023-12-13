import type {ButtonHTMLAttributes} from 'react'

import {cn} from '@/lib/utils'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
	children,
	className,
	disabled,
	...restProps
}: Props) => (
	<button
		disabled={disabled}
		className={cn(
			className,
			'bg-surface-brand-2 active:duration-50 relative rounded-lg p-2 text-2xl shadow transition duration-300 hover:brightness-125 active:-translate-y-1 disabled:opacity-50',
			{'pointer-events-none select-none': disabled},
		)}
		{...restProps}
	>
		{children}
	</button>
)

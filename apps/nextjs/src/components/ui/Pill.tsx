import type {ReactNode} from 'react'
import {cn} from '@/lib/utils'

type Props = {
	children: ReactNode
	className?: string
}

export const Pill = ({children, className}: Props) => (
	<span
		className={cn(className, 'rounded-lg px-2 text-sm font-light text-white')}
	>
		{children}
	</span>
)

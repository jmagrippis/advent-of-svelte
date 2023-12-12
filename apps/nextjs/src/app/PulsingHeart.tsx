import {Heart} from '@/components/icons/Heart'

export const PulsingHeart = () => (
	<div>
		<Heart className="fill-secondary-500 absolute w-6 hover:animate-ping" />
		<Heart className="fill-secondary-600 w-6" />
	</div>
)

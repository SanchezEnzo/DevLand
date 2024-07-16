export function SearchIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
		>
			<path
				fill='#ffffff'
				d='M20.031 20.79c.46.46 1.17-.25.71-.7l-3.75-3.76a7.9 7.9 0 0 0 2.04-5.31c0-4.39-3.57-7.96-7.96-7.96s-7.96 3.57-7.96 7.96s3.57 7.96 7.96 7.96c1.98 0 3.81-.73 5.21-1.94zM4.11 11.02c0-3.84 3.13-6.96 6.96-6.96c3.84 0 6.96 3.12 6.96 6.96s-3.12 6.96-6.96 6.96c-3.83 0-6.96-3.12-6.96-6.96'
			/>
		</svg>
	);
}

export function StarIcon({ className }: { className: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 64 72'
			className={className}
		>
			<path
				fill='#ffce31'
				d='M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z'
			/>
		</svg>
	);
}

export function LinkIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='36'
			height='36'
			viewBox='0 0 24 24'
			stroke-width='2'
			stroke='#cbc8c8'
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6' />
			<path d='M11 13l9 -9' />
			<path d='M15 4h5v5' />
		</svg>
	);
}

export const HamburguerIcon = () => {
	return (
		<svg
			width='24'
			height='20'
			viewBox='0 0 20 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			cursor='pointer'
		>
			<path
				d='M19.9998 1H-0.000244141'
				stroke='#f1f1f1'
				strokeWidth='1.5'
			></path>{' '}
			<path
				d='M19.9998 8H-0.000244141'
				stroke='#f1f1f1'
				strokeWidth='1.5'
			></path>{' '}
			<path
				d='M19.9998 15H-0.000244141'
				stroke='#f1f1f1'
				strokeWidth='1.5'
			></path>
		</svg>
	);
};

export function ArrowLeft() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>

			<g
				id='SVGRepo_tracerCarrier'
				strokeLinecap='round'
				strokeLinejoin='round'
			></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<path
					d='M7.68473 7.33186C8.07526 6.94134 8.07526 6.30817 7.68473 5.91765C7.29421 5.52712 6.66105 5.52712 6.27052 5.91765L1.60492 10.5832C0.823873 11.3643 0.823872 12.6306 1.60492 13.4117L6.27336 18.0801C6.66388 18.4706 7.29705 18.4706 7.68757 18.0801C8.0781 17.6896 8.0781 17.0564 7.68757 16.6659L4.02154 12.9998L22 12.9998C22.5523 12.9998 23 12.5521 23 11.9998C23 11.4476 22.5523 10.9998 22 10.9998L4.01675 10.9998L7.68473 7.33186Z'
					fill='#f1f1f1'
				></path>{' '}
			</g>
		</svg>
	);
}

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
			width='18'
			height='18'
			viewBox='0 0 24 20'
			fill='none'
			className={className}
			data-src='https://cdn.hugeicons.com/icons/star-solid-sharp.svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			role='img'
			color='#ffce31'
		>
			<path
				d='M12 1.75C12.311 1.75 12.5898 1.94201 12.7007 2.23263L15.0587 8.41234L21.5366 8.72913C21.8418 8.74406 22.1074 8.94263 22.2081 9.23111C22.3088 9.5196 22.2244 9.84032 21.9947 10.0419L17.0648 14.3695L18.8767 21.3106C18.9558 21.6135 18.8383 21.9338 18.5821 22.1137C18.3258 22.2937 17.9848 22.2956 17.7266 22.1183L12 18.1875L6.27335 22.1183C6.01519 22.2956 5.67409 22.2937 5.41785 22.1137C5.1616 21.9338 5.04413 21.6135 5.12323 21.3106L6.93517 14.3695L2.0052 10.0419C1.77557 9.84032 1.69118 9.5196 1.79186 9.23111C1.89253 8.94263 2.15815 8.74406 2.46334 8.72913L8.94127 8.41234L11.2992 2.23263C11.4101 1.94201 11.6889 1.75 12 1.75Z'
				fill='#ffce31'
			></path>
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
			strokeWidth='2'
			stroke='#cbc8c8'
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'
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

export function GithubIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='22'
			height='22'
			viewBox='0 0 98 98'
			className='text-slate-500 opacity-60 group-hover/github:opacity-100   '
		>
			<path
				fill='currentColor'
				d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z'
			></path>
		</svg>
	);
}

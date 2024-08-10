import { useStar } from '../../hooks/useStar';
import { GithubIcon, StarIcon } from '../Icons';

export function Footer() {
	const { stars } = useStar();

	return (
		<footer className='h-20 w-full bg-[rgb(11,11,11)] outline outline-[#f1f1f111] outline-[0.1px] text-[#cbc8c8] flex items-center justify-end relative z-10'>
			<nav className='w-[180px] flex  justify-end items-center pr-5'>
				<button className='w-[100px] h-[40px]  flex items-center justify-center rounded-md group hover:bg-[#111111] duration-300 hover:outline outline-[#1b1b1b] outline-[0.1px]'>
					<a
						href='https://github.com/SanchezEnzo/DevLand'
						className='w-full h-full flex justify-center items-center gap-3 font-bold '
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='flex gap-1'>
							<StarIcon className='fill-current text-[#FE9900]  ' />
							{stars.length}
						</div>
						<GithubIcon />
					</a>
				</button>
			</nav>
		</footer>
	);
}

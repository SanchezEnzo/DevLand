import { useStar } from '../../hooks/useStar';
import { ArrowLeft, StarIcon } from '../Icons';

export function Footer() {
	const { stars } = useStar();

	return (
		<footer className='h-20 w-full bg-[rgb(11,11,11)] outline outline-[#f1f1f111] outline-[0.1px] text-[#cbc8c8] flex items-center justify-end relative z-10'>
			<nav className='w-[180px] flex  justify-end items-center pr-5'>
				{/* <p className='font-semibold'>With ❤️ by Enzo Sanchez</p> */}
				<div className='flex gap-2 items-center w-40'>
					<p>Save it!</p>
					<div className='rotate-180'>
						<ArrowLeft />
					</div>
				</div>
				<button className='w-[100px] h-[40px] outline flex items-center justify-center rounded-md outline-[#f1f1f155] outline-[0.1px] group hover:bg-white  duration-300 '>
					<a
						href='https://github.com/SanchezEnzo/DevLand'
						className='w-full h-full flex justify-center items-center gap-1 font-bold group-hover:text-black'
						target='_blank'
					>
						{stars.length}
						<StarIcon className='fill-current text-[#FE9900]  group-hover:animate-spin-slow group-hover:duration-300' />
					</a>
				</button>
			</nav>
		</footer>
	);
}

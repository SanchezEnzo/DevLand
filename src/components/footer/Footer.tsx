import { StarIcon } from '../Icons';

export function Footer() {
	return (
		<section className='h-20 w-full bg-[rgb(11,11,11)] outline outline-[#f1f1f111] outline-[0.1px] text-[#cbc8c8] flex items-center justify-end '>
			<nav className='w-[500px] flex gap-10 justify-center items-center'>
				<p className='font-semibold'>With ❤️ by Enzo Sanchez</p>
				<button className='w-[80px] h-[40px] outline flex items-center justify-center rounded-md outline-[#f1f1f155] outline-[0.1px] group hover:bg-white  duration-300 hover:-translate-y-1'>
					<a
						href='https://github.com/SanchezEnzo/DevLand'
						className='w-full h-full flex justify-center items-center gap-1 font-bold group-hover:text-black'
						target='_blank'
					>
						Star
						<StarIcon className='fill-current text-[#FE9900]  group-hover:animate-spin-slow group-hover:duration-300' />
					</a>
				</button>
			</nav>
		</section>
	);
}

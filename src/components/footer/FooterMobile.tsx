import { GithubIcon, HamburguerIcon, StarIcon } from '../Icons';
import { useState } from 'react';
import { SidebarMobile } from '../sidebar/SidebarMobile';
import { useStar } from '../../hooks/useStar';

export function FooterMobile() {
	const [isOpen, setIsOpen] = useState(false);
	const { stars } = useStar();

	const handleOpen = () => setIsOpen(!isOpen);

	return (
		<>
			<footer className='fixed bottom-0 w-full bg-[rgb(11,11,11)] flex h-[60px] text-[#f1f1f1] z-50 outline outline-[#f1f1f111] outline-[0.1px] justify-between items-center'>
				<section className='  text-[#cbc8c8] flex items-center justify-end'>
					<nav className='w-[100px] pl-5 flex gap-3 justify-center items-center'>
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
				</section>
				<section className='pr-5'>
					<button
						className='outline outline-[#f1f1f155] outline-[0.1px] rounded-md p-2 '
						onClick={handleOpen}
					>
						<HamburguerIcon />
					</button>
				</section>
			</footer>
			<SidebarMobile isOpen={isOpen} handleOpen={handleOpen} />
		</>
	);
}

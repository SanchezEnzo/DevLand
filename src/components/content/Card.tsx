import { useCategory } from '../../hooks/useCategory';
import { useQuery } from '../../hooks/useQuery';
import { Item } from '../../typescript/Interface';

export function Card({ icon, index }: { icon: Item; index: number }) {
	const { category } = useCategory();
	const { query } = useQuery();

	return (
		<article className='outline outline-[#f1f1f111] outline-[0.1px] text-[#f1f1f1ee] rounded-md w-full px-5 py-5 flex flex-col items-center cursor-pointer justify-center gap-3 bg-[rgb(11,11,11)] max-w-[400px] max-md:max-w-[300px] group relative overflow-y-hidden hover:outline-[#f1f1f130] duration-300'>
			<img
				src={icon.img}
				alt={`Screenshot of ${icon.alt}`}
				loading={
					category !== 'All' && query !== '' && index > 7 ? 'lazy' : undefined
				}
				width='100%'
				className='min-w-[160px] max-md:min-w-[160px] max-sm:opacity-90 aspect-[60/29]'
			/>
			<div className='w-full flex justify-between items-center'>
				<div className='flex flex-col w-full pl-2'>
					<span className='font-semibold'>{icon.name}</span>
					<p className='text-[14px] opacity-60 h-10  w-full line-clamp-2'>
						{icon.description}
					</p>
				</div>
			</div>
			<a
				className='absolute w-full h-full z-10'
				href={icon.link}
				target='_blank'
				rel='noopener noreferrer'
				aria-label={'Read more about ' + icon.name}
			></a>
		</article>
	);
}

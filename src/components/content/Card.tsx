import { Item } from '../../typescript/Interface';

export function Card({ icon }: { icon: Item }) {
	return (
		<article className='outline outline-[#f1f1f125] outline-[0.1px] text-[#f1f1f1ee] rounded-md w-full px-5 py-5 flex flex-col items-center cursor-pointer justify-center gap-3 bg-[rgb(11,11,11)] max-w-[400px] max-md:max-w-[300px] group relative overflow-y-hidden sm:hover:scale-[1.02] duration-300'>
			<img
				src={icon.img}
				alt={`Captura de pantalla de la página de ${icon.name}`}
				width='100%'
				loading='lazy'
				className='min-w-[160px] min-h-[174px] max-md:min-w-[160px] max-md:min-h-[124px] max-sm:opacity-90'
			/>
			<div className='w-full flex justify-between items-center'>
				<div className='flex flex-col min-w-3/4 pl-2'>
					<span className='font-semibold '>
						{icon.name}
					</span>
					<p className='text-[14px] opacity-60 block h-10  overflow-y-hidden '>
						{icon.description}
					</p>
				</div>
			</div>
			<a
				className='absolute w-full h-full z-10 '
				href={icon.link}
				target='_blank'
				rel='noopener noreferrer'
			></a>
		</article>
	);
}

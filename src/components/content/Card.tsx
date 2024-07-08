import { Item } from '../../typescript/Interface';

export function Card({ icon, index }: { icon: Item; index: number }) {
	return (
		<article
			key={index}
			className='outline outline-[#f1f1f155] outline-[0.1px] text-[#f1f1f1ee] rounded-md w-full px-5 py-5 flex flex-col items-center cursor-pointer justify-center gap-3 bg-[rgb(11,11,11)] max-xl:max-w-[400px]'
		>
			<img
				src={icon.img}
				alt={`Captura de pantalla de la página de ${icon.name}`}
				width='100%'
				loading='lazy'
				className='min-w-[360px] min-h-[174px]'
			/>
			<div className='flex flex-col w-full pl-2 '>
				<h3 className='font-semibold'>{icon.name}</h3>
				<span className='text-[14px] opacity-60 block h-10'>
					{icon.description}
				</span>
			</div>
		</article>
	);
}

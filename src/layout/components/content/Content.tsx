interface Item {
	name: string;
	tag: string;
	description: string;
	img: string;
	link: string;
}

const ICONS_CONTENT: Item[] = [
	{
		name: 'Lucide',
		tag: 'ICONS',
		description: 'Beautiful & consistent icons',
		img: '/imgs/content/LucideIconsDarkMode.png',
		link: 'https://lucide.dev/',
	},
	{
		name: 'Lucide',
		tag: 'ICONS',
		description: 'Beautiful & consistent icons',
		img: '/imgs/content/LucideIconsDarkMode.png',
		link: 'https://lucide.dev/',
	},

	{
		name: 'Lucide',
		tag: 'ICONS',
		description: 'Beautiful & consistent icons',
		img: '/imgs/content/LucideIconsDarkMode.png',
		link: 'https://lucide.dev/',
	},
	{
		name: 'Lucide',
		tag: 'ICONS',
		description: 'Beautiful & consistent icons',
		img: '/imgs/content/LucideIconsDarkMode.png',
		link: 'https://lucide.dev/',
	},
	{
		name: 'Lucide',
		tag: 'ICONS',
		description: 'Beautiful & consistent icons',
		img: '/imgs/content/LucideIconsDarkMode.png',
		link: 'https://lucide.dev/',
	},
];

export function Card({ icon }: { icon: Item }) {
	return (
		<article
			key={icon.tag}
			className='outline outline-[#f1f1f155] outline-[0.1px] text-[#f1f1f1ee] rounded-md w-full px-5 py-5 flex flex-col items-center cursor-pointer justify-center gap-3 bg-[rgb(11,11,11)] max-xl:max-w-[400px]'
		>
			<img
				src={icon.img}
				alt={`Captura de pantalla de la página de ${icon.name}`}
				width='100%'
			/>
			<div className='flex flex-col w-full pl-2 '>
				<h3 className='font-semibold'>{icon.name}</h3>
				<span className='text-[14px] opacity-60'>{icon.description}</span>
			</div>
		</article>
	);
}

export function Content() {
	return (
		<section className='px-10 pt-20 gap-5 grid grid-cols-repeatAutoFill my-0 mx-auto w-full place-items-center'>
			{ICONS_CONTENT.map(icon => {
				return <Card icon={icon} />;
			})}
		</section>
	);
}

export interface Item {
	name: string;
	tag: string;
	description: string;
	img: string;
	link: string;
}

export const ICONS_CONTENT: Item[] = [
	{
		name: 'Lucide',
		tag: 'ICONS',
		description: 'Beautiful & consistent icons',
		img: '/imgs/content/Lucide.png',
		link: 'https://lucide.dev/',
	},
	{
		name: 'Boxicons',
		tag: 'ICONS',
		description:
			'Simple open source icons carefully crafted for designers & developers',
		img: '/imgs/content/Boxicons.png',
		link: 'https://boxicons.com/',
	},

	{
		name: 'Crypto Logos',
		tag: 'ICONS',
		description: 'High quality cryptocurrency logos',
		img: '/imgs/content/CryptoLogos.png',
		link: 'https://cryptologos.cc/',
	},
	{
		name: 'Css Icons',
		tag: 'ICONS',
		description: 'Open-source CSS, SVG and Figma UI icons',
		img: '/imgs/content/CssIcons.png',
		link: 'https://css.gg/',
	},
	{
		name: 'Flaticon',
		tag: 'ICONS',
		description: 'Access 16.2M+ vector icons & stickers',
		img: '/imgs/content/Flaticon.png',
		link: 'https://www.flaticon.com/',
	},
	{
		name: 'Heroicons',
		tag: 'ICONS',
		description:
			'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
		img: '/imgs/content/heroicons.png',
		link: 'https://heroicons.com/',
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
				<span className='text-[14px] opacity-60 block h-10'>
					{icon.description}
				</span>
			</div>
		</article>
	);
}

export function Content() {
	return (
		<section className='px-10 py-20 gap-5 grid grid-cols-repeatAutoFill my-0 mx-auto w-full place-items-center'>
			{ICONS_CONTENT.map(icon => {
				return <Card icon={icon} />;
			})}
		</section>
	);
}

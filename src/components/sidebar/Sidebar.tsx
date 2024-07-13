import { Categories } from '../../contexts/category';
import { useCategory } from '../../hooks/useCategory';

export function Sidebar() {
	const CATEGORIES: Partial<Categories>[] = [
		'ALL',
		'ICONS',
		'IMAGES',
		'LIBRARIES',
		'TAILWINDCSS',
		'TIPS',
		'TOOLS',
		'UXUI',
	];

	const { updateCategory } = useCategory();
	return (
		<aside className='w-full sticky top-0 max-w-[300px] bg-[rgb(11,11,11)] flex flex-col items-center h-screen text-[#f1f1f1] gap-10 pt-5 outline outline-[#f1f1f111] outline-[0.1px]'>
			<h1 className='rubik-doodle-shadow-regular text-5xl'>Devland</h1>
			<ul className='flex flex-col px-10 w-full gap-5 bungee-regular '>
				{CATEGORIES.map(category => {
					return (
						<li
							key={category}
							className='w-full outline outline-[#f1f1f155] bg-[rgb(14,14,14)] outline-[0.1px] rounded-md p-1 cursor-pointer pl-2'
							onClick={() => updateCategory(category)}
						>
							<span>{category}</span>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}

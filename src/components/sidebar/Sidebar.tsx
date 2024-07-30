import { useCategory } from '../../hooks/useCategory';
import { CATEGORIES } from '../../constants/categories';

export function Sidebar() {
	const { updateCategory, category } = useCategory();

	return (
		<aside className='w-full sticky top-0 max-w-[300px] bg-[#0b0b0b] flex flex-col items-center h-screen text-[#f1f1f1] gap-10 pt-5 outline outline-[#f1f1f111] outline-[0.1px] overflow-y-auto custom-scroll z-20'>
			<h1 className='rubik-doodle-shadow-regular text-5xl' translate='no'>
				Devland
			</h1>
			<ul className='flex flex-col px-10 w-full gap-4 '>
				{CATEGORIES.map(cat => {
					return (
						<li
							key={cat}
							className={`w-full outline outline-[rgba(241,241,241,0.33)] outline-[0.1px] rounded-md p-2 cursor-pointer pl-3 font-semibold  duration-300 ${
								category === cat
									? 'bg-[#f1f1f1dd] text-black '
									: 'bg-[rgb(17,17,17)]'
							}`}
							onClick={() => updateCategory(cat)}
						>
							<span>{cat}</span>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}

import { CATEGORIES } from '../../constants/categories';
import { useCategory } from '../../hooks/useCategory';

interface SidebarMobileProps {
	isOpen: boolean;
	handleOpen: () => void;
}

export function SidebarMobile({ isOpen, handleOpen }: SidebarMobileProps) {
	const { updateCategory, category } = useCategory();

	return (
		<aside
			className={`p-10 fixed z-20 w-full overflow-y-auto custom-scroll top-0 bottom-0 right-0 left-0  mx-auto my-0 pb-20 bg-[#000000] duration-300 flex flex-col gap-10 items-center ${
				isOpen ? 'translate-x-0 ' : 'translate-x-full'
			}`}
		>
			<h2 className='text-[#f1f1f1dd] text-3xl font-semibold'>Categories</h2>
			<ul className='flex-col flex gap-10 w-full h-full'>
				{CATEGORIES.map(cat => (
					<li
						key={cat}
						className={`w-full outline outline-[#f1f1f133] outline-[0.1px] rounded-md p-2 cursor-pointer pl-3 font-semibold duration-300 ${
							category === cat
								? 'bg-[#f1f1f1dd] text-black'
								: 'bg-[rgb(14,14,14)] text-[#f1f1f1dd]'
						}`}
						onClick={() => {
							updateCategory(cat);
							handleOpen();
						}}
					>
						<span>{cat}</span>
					</li>
				))}
			</ul>
		</aside>
	);
}

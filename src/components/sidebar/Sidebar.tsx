export function Sidebar() {
	const SECTIONS = ['Todo', 'Iconos', 'Imágenes', 'Tailwindcss', 'UX/UI'];

	return (
		<aside className='w-full max-w-[300px] bg-[rgb(11,11,11)] flex flex-col items-center h-screen text-[#f1f1f1] gap-10 pt-5 outline outline-[#f1f1f111] outline-[0.1px]'>
			<h1 className='rubik-doodle-shadow-regular text-5xl'>Devland</h1>
			<ul className='flex flex-col px-10 w-full gap-5 bungee-regular '>
				{SECTIONS.map(sec => {
					return (
						<li
							key={sec}
							className='w-full outline outline-[#f1f1f155] bg-[rgb(14,14,14)] outline-[0.1px] rounded-md p-1 cursor-pointer pl-2'
						>
							<span>{sec}</span>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}

export function Sidebar() {
	const SECTIONS = ['Todo', 'Iconos', 'Imágenes', 'Tailwindcss', 'UX/UI'];

	return (
		<aside className='w-full max-w-[300px] bg-[rgb(11,11,11)] flex flex-col items-center h-screen text-[#f1f1f1] gap-10 pt-5'>
			<h1 className='rubik-doodle-shadow-regular text-5xl'>Devland</h1>
			<ul className='flex flex-col px-10 w-full gap-5'>
				{SECTIONS.map(sec => {
					return (
						<li
							key={sec}
							className='w-full outline outline-[#f1f1f1aa] rounded-md p-1 cursor-pointer'
						>
							<span>{sec}</span>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}

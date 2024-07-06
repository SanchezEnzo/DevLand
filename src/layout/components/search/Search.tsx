import { SearchIcon } from '../Icons';

export function Search() {
	return (
		<header className='w-[500px] h-16 outline outline-[#f1f1f1aa] outline-[0.1px] mt-5 flex items-center bg-[rgb(11,11,11)] rounded-md'>
			<form className='text-[#f1f1f1] flex gap-1 items-center w-full h-full pl-4 pr-5 bungee-regular'>
				<button>
					<SearchIcon />
				</button>
				<label htmlFor='search' className='w-full h-full py-4 '>
					<input
						type='text'
						name='query'
						id='search'
						placeholder='Buscar...'
						className='w-full h-full bg-transparent focus:outline-none'
					/>
				</label>
			</form>
		</header>
	);
}

import { SearchIcon } from '../Icons';
import { useQuery } from '../../hooks/useQuery';

export function Search() {
	const { handleChange } = useQuery();

	return (
		<header className='w-[500px] h-12 z-10 outline outline-[#f1f1f111] outline-[0.1px] mt-5 flex items-center bg-[rgb(11,11,11)] rounded-md hover:outline-[#f1f1f130]'>
			<form className='text-[#f1f1f1] flex gap-3 items-center w-full h-full pl-4 m-0'>
				<div>
					<SearchIcon />
				</div>
				<label htmlFor='search' className='w-full h-full'>
					<input
						type='text'
						name='query'
						id='search'
						placeholder='Search'
						className='w-full h-full bg-transparent focus:outline-none font-semibold text-[#f1f1f1]'
						autoComplete='off'
						onChange={handleChange}
					/>
				</label>
			</form>
		</header>
	);
}

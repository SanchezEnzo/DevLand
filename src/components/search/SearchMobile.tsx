import { SearchIcon } from '../Icons';
import { useQuery } from '../../hooks/useQuery';

export function SearchMobile() {
	const { handleChange } = useQuery();

	return (
		<header className='w-full px-5 min-h-12 z-10  flex flex-col items-center  bg-[rgb(27,27,27)]'>
			<h1
				className='rubik-doodle-shadow-regular text-5xl text-[#f1f1f1] pt-5'
				translate='no'
			>
				Devland
			</h1>
			<form className='text-[#f1f1f1] w-full  gap-3 items-center h-[46px] pl-4 outline  outline-[#f1f1f155] outline-[0.1px] mt-5 flex  bg-[rgb(11,11,11)] rounded-md '>
				<div>
					<SearchIcon />
				</div>
				<label htmlFor='search' className='w-full h-full'>
					<input
						type='text'
						name='query'
						id='search'
						placeholder='Search'
						className='w-full h-[46px] bg-transparent focus:outline-none font-semibold overflow-ellipsis'
						autoComplete='off'
						onChange={handleChange}
					/>
				</label>
			</form>
		</header>
	);
}

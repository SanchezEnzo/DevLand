import { usePage } from '../../hooks/usePage';

export function Pagination() {
	const { handleNext, handlePrevious, page } = usePage();
	const { isLastPage } = usePage();
	return (
		<section className='w-full max-lg:px-5 px-40 p-10 max-w-[768px] max-lg:max-w-[500px] h-[150px] pb-10  flex justify-between items-center font-semibold gap-2 max-lg:pb-[120px]'>
			<button
				className={`w-[150px] max-lg:w-[120px] h-[80px] outline flex items-center justify-center rounded-md outline-[#f1f1f119] outline-[0.1px] duration-300 bg-[rgb(11,11,11)] max-md:h-12 ${
					page === 1 ? 'text-zinc-700' : 'text-[#f1f1f1] hover:bg-[#1b1b1b]'
				}`}
				disabled={page === 1}
				onClick={handlePrevious}
			>
				Previous
			</button>

			<div className='h-12 w-12 outline bg-[#f1f1f1dd] text-black  flex justify-center items-center outline-[#f1f1f119] outline-[0.1px] rounded-md border-black border-[3px]'>
				{page}
			</div>

			<button
				className={`w-[150px] max-lg:w-[120px] h-[80px] outline flex items-center justify-center rounded-md outline-[#f1f1f119] max-md:h-12 outline-[0.1px] duration-300  bg-[rgb(11,11,11)] hover:bg-[#1b1b1b] ${
					isLastPage === true ? 'text-zinc-700 ' : 'text-[#f1f1f1] '
				}`}
				onClick={handleNext}
				disabled={isLastPage}
			>
				Next
			</button>
		</section>
	);
}

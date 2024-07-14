import { usePage } from '../../hooks/usePage';

export function Pagination() {
	const { handleNext, handlePrevious, page } = usePage();
	const { isLastPage } = usePage();
	console.log('Es ultima página', isLastPage);
	return (
		<section className='w-full max-w-[1024px] h-[100px] px-40 pb-10 flex justify-between items-center font-semibold '>
			<button
				className={`w-[150px] h-[80px] outline flex items-center justify-center rounded-md outline-[#f1f1f155] outline-[0.1px] duration-300  bg-[rgb(14,14,14)] ${
					page === 1 ? 'text-zinc-700' : 'text-[#f1f1f1] hover:-translate-y-1'
				}`}
				disabled={page === 1}
				onClick={handlePrevious}
			>
				Previous
			</button>

			<div className='h-10 w-10 outline bg-[#f1f1f1dd] text-black  flex justify-center items-center outline-[#f1f1f155] outline-[0.1px] rounded-md border-black border-[3px]'>
				{page}
			</div>

			<button
				className={`w-[150px] h-[80px] outline flex items-center justify-center rounded-md outline-[#f1f1f155] outline-[0.1px] duration-300  bg-[rgb(14,14,14)] ${
					isLastPage === true
						? 'text-zinc-700 '
						: 'text-[#f1f1f1] hover:-translate-y-1'
				}`}
				onClick={handleNext}
				disabled={isLastPage}
			>
				Next
			</button>
		</section>
	);
}

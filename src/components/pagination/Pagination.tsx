import { usePage } from '../../hooks/usePage';

export function Pagination() {
	const { handleNext, handlePrevious, page } = usePage();
	return (
		<section className='w-full h-[100px] px-40 pb-10 flex justify-between items-center'>
			<button
				className={`w-[150px] h-[80px] outline flex items-center justify-center rounded-md outline-[#f1f1f155] outline-[0.1px] ${
					page === 1 ? 'text-zinc-700' : 'text-[#f1f1f1]'
				}`}
				disabled={page === 1}
				onClick={handlePrevious}
			>
				Previous
			</button>

			<div className='h-10 w-10 outline text-[#f1f1f1] flex justify-center items-center outline-[#f1f1f155] outline-[0.1px] rounded-md'>
				{page}
			</div>

			<button
				className='w-[150px] h-[80px] outline text-[#f1f1f1] outline-[#f1f1f155] outline-[0.1px] flex items-center justify-center rounded-md'
				onClick={handleNext}
			>
				Next
			</button>
		</section>
	);
}

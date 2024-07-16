import { useFilter } from '../../hooks/useFilter';
import { usePage } from '../../hooks/usePage';
import { Card } from './Card';

export function Content() {
	const filteredItems = useFilter();
	const { page } = usePage();

	return (
		<section className='px-20 pb-5 max-lg:pb-10 max-md:pb-5 pt-20 max-md:px-5 gap-5 grid grid-cols-repeatAutoFill max-sm:grid-cols-repeatAutoFillMobile my-0 mx-auto w-full place-items-center min-h-[90dvh] items-start'>
			{filteredItems?.slice(page * 6 - 6, page * 6).map((icon, index) => {
				return <Card icon={icon} key={index} />;
			})}
		</section>
	);
}

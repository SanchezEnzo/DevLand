import { useFilter } from '../../hooks/useFilter';
import { usePage } from '../../hooks/usePage';
import { Card } from './Card';

export function Content() {
	const filteredItems = useFilter();
	const { page } = usePage();

	return (
		<section className='px-20  max-lg:pb-10 max-md:pb-5 pt-16 max-sm:pt-10 max-md:px-5 gap-5 grid grid-cols-repeatAutoFill max-sm:grid-cols-repeatAutoFillMobile my-0 mx-auto w-full place-items-center min-h-[76dvh] items-start'>
			{filteredItems?.slice(page * 8 - 8, page * 8).map((icon, index) => {
				return <Card icon={icon} key={index} />;
			})}
		</section>
	);
}

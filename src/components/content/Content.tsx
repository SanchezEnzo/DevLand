import { useFilter } from '../../hooks/useFilter';
import { usePage } from '../../hooks/usePage';
import { Card } from './Card';

export function Content() {
	const filteredItems = useFilter();
	const { page } = usePage();

	return (
		<section className='px-10 py-20 gap-5 grid grid-cols-repeatAutoFill my-0 mx-auto w-full place-items-center min-h-[90dvh] items-start'>
			{filteredItems?.slice(page * 12 - 12, page * 12).map((icon, index) => {
				return <Card icon={icon} index={index} />;
			})}
		</section>
	);
}

import { useFilter } from '../../hooks/useFilter';
import { useQuery } from '../../hooks/useQuery';
import { Card } from './Card';

export function Content() {
	const { query } = useQuery();
	const filteredItems = useFilter({ query });

	return (
		<section className='px-10 py-20 gap-5 grid grid-cols-repeatAutoFill my-0 mx-auto w-full place-items-center  items-start'>
			{filteredItems?.map((icon, index) => {
				return <Card icon={icon} index={index} />;
			})}
		</section>
	);
}

import { Content } from '../components/content/Content';
import { Search } from '../components/search/Search';
import { Sidebar } from '../components/sidebar/Sidebar';

export function LayoutApp() {
	return (
		<div className='bg-[rgb(14,14,14)] flex gutter'>
			<Sidebar />
			<div className='w-full flex flex-col items-center'>
				<Search />
				<Content />
			</div>
		</div>
	);
}

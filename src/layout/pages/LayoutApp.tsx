import { Search } from '../components/search/Search';
import { Sidebar } from '../components/sidebar/Sidebar';

export function LayoutApp() {
	return (
		<div className='bg-[rgb(14,14,14)] min-h-screen flex'>
			<Sidebar />
			<section className='w-full flex flex-col items-center'>
				<Search />
			</section>
		</div>
	);
}

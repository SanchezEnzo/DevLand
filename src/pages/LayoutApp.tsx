import { Content } from '../components/content/Content';
import { Footer } from '../components/footer/Footer';
import { Pagination } from '../components/pagination/Pagination';
import { Search } from '../components/search/Search';
import { Sidebar } from '../components/sidebar/Sidebar';

export function LayoutApp() {
	return (
		<div className='bg-[rgb(14,14,14)] flex gutter   '>
			<Sidebar />
			<div className='w-full flex flex-col items-center relative'>
				<Search />
				<Content />
				<Pagination />
				<Footer />
			</div>
		</div>
	);
}

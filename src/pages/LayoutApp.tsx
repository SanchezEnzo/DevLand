import { useMediaQuery } from 'usehooks-ts';
import { Content } from '../components/content/Content';
import { Footer } from '../components/footer/Footer';
import { Pagination } from '../components/pagination/Pagination';
import { Search } from '../components/search/Search';
import { Sidebar } from '../components/sidebar/Sidebar';
import { SearchMobile } from '../components/search/SearchMobile';
import { FooterMobile } from '../components/footer/FooterMobile';

export function LayoutApp() {
	const isMobileScreen = useMediaQuery('(max-width: 768px)');

	return (
		<div className='bg-[rgb(17,17,17)] flex gutter'>
			{isMobileScreen || <Sidebar />}
			<div className='w-full flex flex-col items-center relative background-content'>
				{isMobileScreen ? <SearchMobile /> : <Search />}
				<Content />
				<Pagination />

				{isMobileScreen ? <FooterMobile /> : <Footer />}
			</div>
		</div>
	);
}

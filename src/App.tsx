import { CategoryProvider } from './contexts/category';
import { PageProvider } from './contexts/page';
import { QueryProvider } from './contexts/query';
import { LayoutApp } from './pages/LayoutApp';

function App() {
	return (
		<QueryProvider>
			<PageProvider>
				<CategoryProvider>
					<LayoutApp />
				</CategoryProvider>
			</PageProvider>
		</QueryProvider>
	);
}

export default App;

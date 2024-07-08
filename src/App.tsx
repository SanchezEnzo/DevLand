import { QueryProvider } from './contexts/query';
import { LayoutApp } from './pages/LayoutApp';

function App() {
	return (
		<QueryProvider>
			<LayoutApp />
		</QueryProvider>
	);
}

export default App;

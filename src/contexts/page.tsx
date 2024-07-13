import { createContext, useState } from 'react';
const initialValue = {
	page: 1,
	handleNext: () => {},
	handlePrevious: () => {},
};

export const PageContext = createContext(initialValue);

export function PageProvider({ children }: { children: React.ReactNode }) {
	const [page, setPage] = useState(1);
	const handlePrevious = () => {
		setPage(prevPage => prevPage - 1);
	};

	const handleNext = () => {
		setPage(prevPage => prevPage + 1);
	};
	return (
		<PageContext.Provider value={{ page, handleNext, handlePrevious }}>
			{children}
		</PageContext.Provider>
	);
}

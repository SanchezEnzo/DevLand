import { createContext, useState } from 'react';
import { Item } from '../typescript/Interface';


const initialValue = {
	page: 1,
	handleNext: () => {},
	handlePrevious: () => {},
	isLastPage: false,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	checkIsLastPage: (_filteredItems: Item[]) => {},
};

export const PageContext = createContext(initialValue);

export function PageProvider({ children }: { children: React.ReactNode }) {
	const [page, setPage] = useState(1);
	const [isLastPage, setIsLastPage] = useState(false);
	const handlePrevious = () => 
		setPage(prevPage => prevPage - 1);


	const handleNext = () => 
		setPage(prevPage => prevPage + 1);
	

	const checkIsLastPage = (filteredItems: Item[]) =>
		setIsLastPage(filteredItems.length / 8 <= page);

	return (
		<PageContext.Provider
			value={{ page, handleNext, handlePrevious, isLastPage, checkIsLastPage }}
		>
			{children}
		</PageContext.Provider>
	);
}

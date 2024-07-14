import { createContext, useState } from 'react';
import { Item } from '../typescript/Interface';
const initialValue = {
	page: 1,
	handleNext: () => {},
	handlePrevious: () => {},
	isLastPage: false,
	checkIsLastPage: (filteredItems: Item[]) => filteredItems,
};

export const PageContext = createContext(initialValue);

export function PageProvider({ children }: { children: React.ReactNode }) {
	const [page, setPage] = useState(1);
	const [isLastPage, setIsLastPage] = useState(false);
	const handlePrevious = () => {
		setPage(prevPage => prevPage - 1);
	};

	const handleNext = () => {
		setPage(prevPage => prevPage + 1);
	};

	const checkIsLastPage = (filteredItems: Item[]): Item[] => {
		setIsLastPage(filteredItems.length / 6 <= page);
		return filteredItems;
	};
	return (
		<PageContext.Provider
			value={{ page, handleNext, handlePrevious, isLastPage, checkIsLastPage }}
		>
			{children}
		</PageContext.Provider>
	);
}

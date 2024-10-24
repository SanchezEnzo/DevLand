import { createContext, useState } from 'react';
import { Categories } from '../typescript/Interface';


// 
export interface CategoryContextProps {
	category: Partial<Categories>;
	updateCategory: (category: Partial<Categories>) => void;
}

const initialValue: CategoryContextProps = {
	category: 'All',
	updateCategory: (category: Partial<Categories>) => category,
};

export const CategoryContext =
	createContext<CategoryContextProps>(initialValue);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
	const [category, setCategory] = useState<Partial<Categories>>('All');

	const updateCategory = (category: Partial<Categories>) => {
		setCategory(category);
	};

	return (
		<CategoryContext.Provider value={{ category, updateCategory }}>
			{children}
		</CategoryContext.Provider>
	);
}

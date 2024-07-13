import { createContext, useState } from 'react';

export type Categories =
	| 'ALL'
	| 'ICONS'
	| 'IMAGES'
	| 'LIBRARIES'
	| 'TAILWINDCSS'
	| 'TIPS'
	| 'TOOLS'
	| 'UXUI';

export interface CategoryContextProps {
	category: Partial<Categories>;
	updateCategory: (category: Partial<Categories>) => void;
}

const initialValue: CategoryContextProps = {
	category: 'ALL',
	updateCategory: (category: Partial<Categories>) => category,
};

export const CategoryContext =
	createContext<CategoryContextProps>(initialValue);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
	const [category, setCategory] = useState<Partial<Categories>>('ALL');

	const updateCategory = (category: Partial<Categories>) => {
		setCategory(category);
	};

	return (
		<CategoryContext.Provider value={{ category, updateCategory }}>
			{children}
		</CategoryContext.Provider>
	);
}

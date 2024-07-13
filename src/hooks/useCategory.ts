import { useContext } from 'react';
import { CategoryContext } from '../contexts/category';

export function useCategory() {
	const context = useContext(CategoryContext);
	if (context === undefined)
		throw new Error('CategoryContext has to be within CategoryProvider');
	return context;
}

import { useContext } from 'react';
import { PageContext } from '../contexts/page';

export function usePage() {
	const context = useContext(PageContext);
	if (context === undefined)
		throw new Error('PageContext has to be within PageProvider');
	return context;
}

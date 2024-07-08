import { useContext } from 'react';
import { QueryContext } from '../contexts/query';

export function useQuery() {
	const context = useContext(QueryContext);
	if (context === undefined)
		throw new Error('QueryContext has to be within QueryProvider');
	return context;
}

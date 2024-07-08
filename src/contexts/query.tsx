import { createContext, useState } from 'react';

export interface QueryContextInterface {
	query: string;
	handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const initialValue: QueryContextInterface = {
	query: '',
	handleChange: () => null,
};
export const QueryContext = createContext(initialValue);

export function QueryProvider({ children }: { children: React.ReactNode }) {
	const [query, setQuery] = useState('');

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setQuery((e.target as HTMLInputElement).value);
	};
	return (
		<QueryContext.Provider value={{ query, handleChange }}>
			{children}
		</QueryContext.Provider>
	);
}

import { useEffect, useState } from 'react';
import { Item } from '../typescript/Interface';
import { ICONS_ITEM } from '../constants/iconsItems';

export function useFilter({ query }: { query: string }) {
	const [filteredItems, setFilteredItems] = useState<Item[]>();
	useEffect(() => {
		const filterByQuery = ICONS_ITEM.filter(
			item =>
				item.name.toLowerCase().includes(query) ||
				item.description.toLowerCase().includes(query)
		);
		setFilteredItems(filterByQuery);
	}, [query]);

	return filteredItems;
}

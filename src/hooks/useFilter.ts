import { useEffect, useState } from 'react';
import { Item } from '../typescript/Interface';
import { ICONS_ITEM } from '../constants/iconsItems';
import { useQuery } from './useQuery';
import { useCategory } from './useCategory';

export function useFilter() {
	const { query } = useQuery();
	const { category } = useCategory();
	const [filteredItems, setFilteredItems] = useState<Item[]>();
	useEffect(() => {
		if (category === 'ALL' && query === '') return;
		const filterByCategory = ICONS_ITEM.filter(item => item.tag === category);
		const filterByQuery = filterByCategory.filter(
			item =>
				item.name.toLowerCase().includes(query) ||
				item.description.toLowerCase().includes(query)
		);
		setFilteredItems(filterByQuery);
	}, [query, category]);

	return filteredItems;
}

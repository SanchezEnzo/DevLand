/* eslint-disable no-mixed-spaces-and-tabs */
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
		if (category === 'ALL' && query === '') {
			setFilteredItems(ICONS_ITEM);
			return;
		}

		const filterByCategory =
			category === 'ALL'
				? ICONS_ITEM
				: ICONS_ITEM.filter(item => item.tag === category);

		const filterByQuery =
			query === ''
				? filterByCategory
				: filterByCategory.filter(
						item =>
							item.name.toLowerCase().includes(query.toLowerCase()) ||
							item.description.toLowerCase().includes(query.toLowerCase())
				  );

		setFilteredItems(filterByQuery);
	}, [query, category]);

	return filteredItems;
}

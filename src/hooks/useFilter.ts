/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from 'react';
import { Item } from '../typescript/Interface';
import { ICONS_ITEM } from '../constants/iconsItems';
import { useQuery } from './useQuery';
import { useCategory } from './useCategory';
import { usePage } from './usePage';

export function useFilter() {
	const { query } = useQuery();
	const { category } = useCategory();
	const [filteredItems, setFilteredItems] = useState<Item[]>(ICONS_ITEM);
	const { checkIsLastPage, page } = usePage();

	useEffect(() => {
		if (category === 'All' && query === '') {
			setFilteredItems(ICONS_ITEM);
			return;
		}

		const filterByCategory =
			category === 'All'
				? ICONS_ITEM
				: ICONS_ITEM.filter(item => item.tag.some(categoryItem => categoryItem === category));

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

	useEffect(() => {
		checkIsLastPage(filteredItems);
	}, [page, filteredItems]);

	return filteredItems;
}

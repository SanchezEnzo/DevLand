import { useEffect, useState } from 'react';
import { getStarsNumber, StarsInterface } from '../service/stars';

export function useStar() {
	const [stars, setStars] = useState<StarsInterface[]>([] as StarsInterface[]);
	useEffect(() => {
		const fetchStars = async () => {
			try {
				const starred = await getStarsNumber();
				setStars(starred);
			} catch (error) {
				console.log('Getting stars error: ', error);
			}
		};
		fetchStars();
	}, []);
	return { stars };
}

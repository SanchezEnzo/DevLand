export type Categories =
	| 'All'
	| 'Animations'
	| 'CSS'
	| 'Components'
	| 'Guides'
	| 'HTML'
	| 'Icons'
	| 'Images'
	| 'Libraries'
	| 'Tailwind'
	| 'Tips'
	| 'Tools'
	| 'UX-UI'
	| 'Videos';

export interface Item {
	name: string;
	tag: Partial<Categories>[];
	description: string;
	img: string;
	alt: string;
	link: string;
}

export interface StarsInterface {
	login: 'string';
	id: 'string';
	node_id: 'string';
	avatar_url: 'string';
	gravatar_id: 'string';
	url: 'string';
	html_url: 'string';
	followers_url: 'string';
	following_url: 'string';
	gists_url: 'string';
	starred_url: 'string';
	subscriptions_url: 'string';
	organizations_url: 'string';
	repos_url: 'string';
	events_url: 'string';
	received_events_url: 'string';
	type: 'string';
	site_admin: boolean;
}

export async function getStarsNumber(): Promise<StarsInterface[]> {
	const BASE_URL =
		'https://api.github.com/repos/sanchezenzo/devland/stargazers';
	try {
		const res = await fetch(BASE_URL);
		if (!res.ok) throw new Error(`Error getting stars: ${res.statusText}`);
		const data = res.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error('Error getting stars: ', error);
		throw error;
	}
}

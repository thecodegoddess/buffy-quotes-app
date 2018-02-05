function getBuffyQuotes() {

	const url = 'https://randomuser.me/api/';
	return fetch(url).then((response) => response.json());

}

export default getBuffyQuotes;

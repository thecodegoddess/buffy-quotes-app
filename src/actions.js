export const ACTIONS = {
	GET_SEASONS : 'GET_SEASONS',
	GET_CHARS : 'GET_CHARS',
	GET_QUOTES_ALL : 'GET_QUOTES_ALL',
	SELECT_QUOTES : 'SELECT_QUOTES',
	SET_FILTERS : 'SET_FILTERS',
};

export function getSeasons() {
	return {
		type : ACTIONS.GET_SEASONS
	}
}

export function getCharacter() {
	return {
		type : ACTIONS.GET_CHARS
	}
}

export function getQuotes() {
	return {
		type : ACTIONS.GET_QUOTES_ALL
	}
}

export function setFilter(filters) {
	return {
		type : ACTIONS.SET_FILTERS,
		filters
	}
}

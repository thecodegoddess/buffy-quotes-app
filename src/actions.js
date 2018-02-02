export const ACTIONS = {
	GET_BUFFY_QUOTES : 'GET_BUFFY_QUOTES',
	RETURN_BUFFY_QUOTES : 'RETURN_BUFFY_QUOTES',
	FILTER_QUOTES : 'FILTER_QUOTES',
};

export function getQuotes() {
	return {
		type : ACTIONS.GET_BUFFY_QUOTES
	}
}

export function returnQuotes(data) {
	return {
		type : ACTIONS.RETURN_BUFFY_QUOTES,
		data
	}
}

export function filterQuotes(name, value) {
	return {
		type: ACTIONS.FILTER_QUOTES,
		name,
		value
	}
}

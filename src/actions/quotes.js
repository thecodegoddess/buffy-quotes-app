import { QUOTES_GET, QUOTES_RETURN } from '../configs';

export function getQuotes() {
	return {
		type : QUOTES_GET
	}
}

export function returnQuotes(data) {
	return {
		type : QUOTES_RETURN,
		data
	}
}

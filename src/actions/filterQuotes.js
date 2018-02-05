import { QUOTES_FILTER } from '../configs';

export function filterQuotes(name, value) {

	return {
		type: QUOTES_FILTER,
		name,
		value
	}

}

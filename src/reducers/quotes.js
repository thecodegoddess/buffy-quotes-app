import { QUOTES_RETURN } from '../configs';

export default function quotes(state = {}, action) {

	if (action.type === QUOTES_RETURN) {

		return action.data.quotes;

	}

	return state;

}

export function getSelectedQuotes ({ quotes, filters }) {

	const { id = 'all', season = 'all' } = filters;

	if (id === '' && season === '') {

		return {};

	}

	let filterQuotesObject = {...quotes};

	if (id && filterQuotesObject[id]) {

		filterQuotesObject = {[id] : filterQuotesObject[id]};

	}

	if (season && season !== 'all') {

		Object.keys(filterQuotesObject).forEach((person) => {

			filterQuotesObject[person] = filterQuotesObject[person].filter((quote) => {

				return quote.season === season;

			});

		});

	}

	return filterQuotesObject;

}

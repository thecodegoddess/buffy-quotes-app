import { QUOTES_RETURN } from '../configs';

export default function quotes(state = {}, action) {

	if (action.type === QUOTES_RETURN) {

		return action.data.quotes;

	}

	return state;

}

export function getSelectedQuotes ({ quotes, filters }) {

	// if no filters, default to all
	const { id = 'all', season = 'all' } = filters;

	// if id and season are empty, return no quotes
	if (id === '' && season === '') {

		return {};

	}

	// Copy the quotes object
	let filterQuotesObject = {...quotes};

	// if there is an id value and it exists in the quotes
	if (id && filterQuotesObject[id]) {

		// set the quote filter to be only that id
		filterQuotesObject = {[id] : filterQuotesObject[id]};

	}

	// if there is a season and it is not set to all
	if (season && season !== 'all') {

		// go through each quote object and filter out for the selected filter season
		Object.keys(filterQuotesObject).forEach((person) => {

			filterQuotesObject[person] = filterQuotesObject[person].filter((quote) => {

				return quote.season === season;

			});

		});

	}

	return filterQuotesObject;

}

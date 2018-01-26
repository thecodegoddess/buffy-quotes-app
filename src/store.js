import { createStore, combineReducers } from 'redux';
import { chars, seasons, quotes, filters } from './reducers';
import { quotes as defaultQuotes, seasons as defaultSeasons, chars as defaultChars } from './quotes/bq';
const rootReducer = combineReducers({
	chars,
	seasons,
	quotes,
	filters
});
const store = createStore(
	rootReducer,
	{ quotes : defaultQuotes, seasons : defaultSeasons, chars : defaultChars, filters : {} },
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const getSelectedQuotes = (state) => {

	const { filters, quotes, chars } = state;
	const { id, season } = filters;
	let meshedQuotes = [];

	const charIds = Object.keys(quotes);


	if (charIds.indexOf(id) === -1) {
		charIds.forEach((key) => {
			const whosQuote = chars[key];
			console.log(whosQuote)
			meshedQuotes = [ ...meshedQuotes, ...quotes[key]]
		});
	}

	if (quotes[id]) {
		meshedQuotes = [ ...meshedQuotes, ...quotes[id]]
	}

	if (season) {
		meshedQuotes = meshedQuotes.filter((quote) => {
			return quote.season === season;
		})
	}

	return meshedQuotes;
};

export const getCurrentChar = (state) => {
	const { filters, chars } = state;
	if (filters && filters.id) {
		return chars[filters.id];
	} else {
		return 'All Character';
	}
}

export default store;

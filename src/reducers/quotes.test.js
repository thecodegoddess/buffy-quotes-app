import { QUOTES_RETURN } from '../configs';
import reducer, { getSelectedQuotes } from './quotes';
import { quotes, chars, seasons } from '../quotes/bq';
import filters from './filters';

describe('quotes reducers suite', () => {
	let state;
	it('Undefined returns empty object', () => {
		state = reducer(undefined, {});
		expect(state).toEqual({});
	});

	it('quotes to be returned', () => {
		state = reducer(state, {
			type : QUOTES_RETURN,
			data : {
				quotes
			}
		});

		const keys = Object.keys(state);
		const lastKey = keys[keys.length - 1];
		expect(state[lastKey]).toEqual(quotes[lastKey]);

	});


});

describe('quotes selector suite', () => {
	let filters;
	let state;
	const season = seasons[seasons.length - 1];
	const characterId = Object.keys(chars);


	it('Returns empty object', () => {

		filters = {
			id : '',
			season : ''
		};

		state = getSelectedQuotes({
			quotes,
			filters
		});

		expect(state).toEqual({});

	});

	it('returns only character quote', () => {
		filters.id = characterId[3];
		state = getSelectedQuotes({
			quotes,
			filters
		});

		const stateKeys = Object.keys(state);


		expect(stateKeys).toHaveLength(1);
		expect(stateKeys[0]).toEqual(characterId[3]);

	});

	it('returns only one character and only one season', () => {
		filters.season = '7';

		state = getSelectedQuotes({
			quotes,
			filters
		});

		const notSeason = state[filters.id].filter((quote) => {
			return quote.season !== filters.season
		});

		// Only one character in the list
		expect(state[filters.id].length).toBeGreaterThan(1);
		// No quotes other than the single season
		expect(notSeason).toEqual([]);

	})


});

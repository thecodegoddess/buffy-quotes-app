import { QUOTES_RETURN } from '../configs';
import { seasons } from '../quotes/bq';
import reducer from './seasons';

describe('Seasons Reducer Suite', () => {
	let state;

	it('Should return empty array', () => {

		state = reducer(undefined, {});
		expect(state).toEqual([]);

	});

	it('Should return the seasons', () => {

		state = reducer([], {
			type : QUOTES_RETURN,
			data : {
				seasons
			}
		});

		expect(state).toHaveLength(seasons.length);

	});

});

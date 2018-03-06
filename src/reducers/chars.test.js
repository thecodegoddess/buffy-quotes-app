import reducers from './chars';
import { QUOTES_RETURN } from '../configs';
import { chars } from '../quotes/bq';

describe('char reducer', () => {
	let state;

	it('should return an empty state', () => {
		state = reducers(undefined, {});
		expect(state).toEqual({});
	});

	it('should return the passed char object', () => {
		state = reducers(undefined, {
			type : QUOTES_RETURN,
			data : {
				chars : chars
			}
		});
		expect(state).toEqual(chars);
	});

	it('invalid action should return state unmodified', () => {
		const defaultState = { a : true };
		state = reducers(defaultState, {
			type : 'NOT_VALID_ACTION'
		});
		expect(state).toEqual(defaultState);

	});
});




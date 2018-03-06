import reducer from './filters';
import { QUOTES_FILTER } from '../configs';

describe('reducer filters', () => {
	let state;

	it('returns empty state', () => {
		state = reducer(undefined, {});
		expect(state).toEqual({});
	});

	it('returns updated state', () => {
		const action = {
			type : QUOTES_FILTER,
			name : 'season',
			value : '1'
		};
		state = reducer(undefined, action);

		expect(state.season).toEqual(action.value);


	});

	it('updates state value and adds new value', () => {
		const oldState = {
			...state,
			char : 'cordelia'
		};
		state = reducer(oldState, {
			type : QUOTES_FILTER,
			name : 'season',
			value : '5'
		});

		expect(state.season).toEqual('5');
		expect(state.char).toEqual(oldState.char);
	});

});

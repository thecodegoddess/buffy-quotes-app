import rootReducer from './index';

describe('Root Reducer Suite', () => {

	it('test', () => {
		const state = rootReducer(undefined, {});
		expect(state)
	})

});

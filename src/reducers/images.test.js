import { QUOTES_RETURN } from '../configs';
import { images } from '../quotes/bq';
import reducer from './images';

describe('Images reducer', () => {
	let state;

	it('Empty Object', () => {
		state = reducer(undefined, {});
		expect(state).toEqual({});
	});

	it ('populates with images', () => {
		state = reducer({}, {
			type : QUOTES_RETURN,
			data : {
				images : images
			}
		});

		expect(state[0]).toEqual(images[0]);
		expect(Object.keys(state)).toHaveLength(10);
	})

});

import { QUOTES_RETURN } from '../configs';

export default function images(state = {}, action) {

	if (action.type === QUOTES_RETURN) {

		return action.data.images;

	}

	return state;

}

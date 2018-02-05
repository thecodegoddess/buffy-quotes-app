import { QUOTES_RETURN } from '../configs';

export default function seasons(state = [], action) {

	if (action.type === QUOTES_RETURN) {

		return action.data.seasons;

	}

	return state;

}

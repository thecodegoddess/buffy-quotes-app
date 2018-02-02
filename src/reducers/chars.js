import { QUOTES_RETURN } from '../configs';

export default function chars(state = {}, action) {
	if (action.type === QUOTES_RETURN) {
		return action.data.chars
	}
	return state;
}

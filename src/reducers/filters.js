import { QUOTES_FILTER } from '../configs';

export default function filters(state = {}, action) {

	if (action.type === QUOTES_FILTER) {

		return { ...state, [action.name] : action.value };

	}

	return state;

}

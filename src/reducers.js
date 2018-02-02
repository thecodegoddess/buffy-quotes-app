import { ACTIONS } from './actions';
console.log(ACTIONS);

export function images(state = {}, action) {
	if (action.type === ACTIONS.RETURN_BUFFY_QUOTES) {
		return action.data.images
	};
	return state;
}
export function chars(state = {}, action) {
	if (action.type === ACTIONS.RETURN_BUFFY_QUOTES) {
		return action.data.chars
	}
	return state;
}
export function quotes(state = {}, action) {
	if (action.type === ACTIONS.RETURN_BUFFY_QUOTES) {
		return action.data.quotes;
	}
	return state;
}
export function seasons(state = [], action) {
	if (action.type === ACTIONS.RETURN_BUFFY_QUOTES) {
		return action.data.seasons
	}
	return state;
}
export function selectedQuotes(state = {}, action) {
	return state;
}

export function filters(state = {}, action) {
	return state;
}

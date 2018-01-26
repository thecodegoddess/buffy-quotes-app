import { ACTIONS } from './actions';

export function quotes(state = [], action) {
	switch (action.type) {
		default:
			return state;
	}
}

export function filters(state = {}, action) {
	console.log('%cSTUFF state %o, action %o', 'font-size: 20px;', state, action);
	switch (action.type) {
		case ACTIONS.SET_FILTERS:
			return action.filters;
		default:
			return state;
	}
}

export function chars(state = {}, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export function seasons(state = [], action) {
	switch (action.type) {
		default:
			return state;
	}
}

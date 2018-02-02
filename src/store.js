import { createStore, compose, combineReducers } from 'redux';
import {
	quotes,
	seasons,
	images,
	filters,
	selectedQuotes,
	chars
} from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

const store = createStore(combineReducers({
	quotes,
	seasons,
	images,
	filters,
	selectedQuotes,
	chars
}), {
	images : {},
	chars : {},
	seasons : [],
	quotes : {},
	filters : {
		id : '',
		season : ''
	},
	selectedQuotes : {}

}, composeEnhancers());

export default store;

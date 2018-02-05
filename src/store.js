import {
		createStore,
		compose,
		applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

const defaultState = {

	images : {},
	chars : {},
	seasons : [],
	quotes : {},
	filters : {
		id : '',
		season : ''
	}

};

const store = createStore(
		rootReducer,
		defaultState,
		composeEnhancers(applyMiddleware(thunk))
);

export default store;

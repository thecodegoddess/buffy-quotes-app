import { combineReducers } from 'redux';
import chars from './chars';
import filters from './filters';
import images from './images';
import quotes, { getSelectedQuotes } from './quotes';
import seasons from './seasons';

export { getSelectedQuotes };

export default combineReducers({
	chars,
	filters,
	quotes,
	images,
	seasons,
});




import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, { getSelectedQuotes, getCurrentChar } from './store';
import { getCharacter, getQuotes, getSeasons, setFilter } from './actions';

// import BuffyQuotes from './quotes/buffy_quotes_v2';
import registerServiceWorker from './registerServiceWorker';
// import { getCurrentChar } from './store';
// console.log(store.getState());
// store.dispatch(getQuotes('3'));
// console.log(store.getState());
// store.dispatch(setFilter({season : '7'}));
const currentState = store.getState();
const { quotes, filters} = currentState;
function updateFilter() {

	store.dispatch(setFilter({season : '7'}));
}
const theQuotes = getSelectedQuotes(currentState);
const currCharName = getCurrentChar(currentState);
ReactDOM.render(<div>
	<h1>{ currCharName }</h1>

	<ul>
		{theQuotes.map((quote, idx) => {
			return (
				<li key={ idx }> { quote.quote } <strong>{ `Season ${quote.season}` }</strong></li>
			);
		})}
	</ul>
	<button onClick={ updateFilter }>Test this</button>

</div>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// window.bq = BuffyQuotes;

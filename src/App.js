import React, { Component } from 'react';
import getBuffyQuotes from './api/buffyQuotesMock';
import store from './store';
import { getQuotes, filterQuotes, returnQuotes} from './actions';
import './App.css';
import Header from './components/Header';
import ShowQuotes from './components/ShowQuotes';
import withBuffyQuotes from './components/withBuffyQuotes';

import { chars, quotes, seasons, images } from './quotes/bq';


window.storeB = store;
const BuffyQuotes = withBuffyQuotes(ShowQuotes);

class App extends Component {

	test = () => {
		store.dispatch(returnQuotes({ chars, quotes, seasons, images }));
	};
	test2 = () => {
		store.dispatch(filterQuotes('id', '2'));
	};

	render() {

		return (
			<div className="App">
				<button onClick={ this.test }>get stuff</button>
				<button onClick={ this.test2 }>get stuff 2</button>

				<section className="o-main-layout">
					<BuffyQuotes show="Buffy"/>
				</section>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import getBuffyQuotes from './api/buffyQuotesMock';
import store from './store';
// import { getQuotes, filterQuotes, returnQuotes } from './actions';
import { quotes as quotesAction, filterQuotes } from './actions';
import './App.css';
import Header from './components/Header';
import ShowQuotes from './components/ShowQuotes';
import withBuffyQuotes from './components/withBuffyQuotes';

import WithBuffyQuotes from './containers/WithBuffyQuotes';
// import { returnQuotes } from './actions';

import { chars, quotes, seasons, images } from './quotes/bq';


window.storeB = store;
// const BuffyQuotes = withBuffyQuotes(ShowQuotes);

class App extends Component {

	componentDidMount() {
		store.dispatch(quotesAction.returnQuotes({ chars, quotes, seasons, images }))
	}

	render() {

		return (
			<Provider store={ store }>
				<div className="App">
					<Header />
					<section className="o-main-layout">
						<WithBuffyQuotes show="BTVS"/>
					</section>
				</div>
			</Provider>
		);
	}
}

export default App;

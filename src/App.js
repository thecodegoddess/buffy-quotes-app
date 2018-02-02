import React, { Component } from 'react';
import getBuffyQuotes from './api/buffyQuotesMock';
import './App.css';

import Header from './components/Header';
import ShowQuotes from './components/ShowQuotes';
import withBuffyQuotes from './components/withBuffyQuotes';

const BuffyQuotes = withBuffyQuotes(ShowQuotes);

class App extends Component {

	test = () => {
		getBuffyQuotes(true)
			.then((jsonThing) => {
				console.log(jsonThing);
			})
			.catch((error) => {
				console.warn(error);
			})
	}
	render() {

		return (
			<div className="App">
				<button onClick={ this.test }>get stuff</button>

				<section className="o-main-layout">
					<BuffyQuotes show="Buffy"/>
				</section>
			</div>
		);
	}
}

export default App;

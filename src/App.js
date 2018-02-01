import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import ShowQuotes from './components/ShowQuotes';
import withBuffyQuotes from './components/withBuffyQuotes';

const BuffyQuotes = withBuffyQuotes(ShowQuotes);

class App extends Component {

	render() {

		return (
			<div className="App">
				<Header/>
				<section className="o-main-layout">
					<BuffyQuotes show="Buffy"/>
				</section>
			</div>
		);
	}
}

export default App;

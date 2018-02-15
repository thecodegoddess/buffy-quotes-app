import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Header from './components/Header';
import WithBuffyQuotes from './containers/WithBuffyQuotes';

class App extends Component {

	render() {

		return (
			<Provider store={ store }>
				<div className="App">
					<Header title="Buffy Quotes App" />
					<section className="o-main-layout">
						<WithBuffyQuotes show="BTVS"/>
					</section>
				</div>
			</Provider>
		);

	}

}

export default App;

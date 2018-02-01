import React, { Component } from 'react';
import { func, shape, arrayOf, string, objectOf, array, object } from 'prop-types';
import './App.css';

import Header from './components/Header';
import ShowQuotes from './components/ShowQuotes';
import withBuffyQuotes from './components/withBuffyQuotes';

const BuffyQuotes = withBuffyQuotes(ShowQuotes);

class App extends Component {

  render() {


    return (
      <div className="App">
	      <Header />
	      <section className="o-main-layout">
          <BuffyQuotes stuff="this is some stuff"/>

	      </section>
      </div>
    );
  }
}

export default App;

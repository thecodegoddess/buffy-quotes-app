import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { quotes, seasons, chars} from './quotes/bq';


const withBuffyQuotes = (UnWrappedComponent) => {

	return class extends Component {

		static displayName = `withBuffyQuotes(${ UnWrappedComponent.displayName || UnWrappedComponent.name })`

		state = {
			quotes,
			seasons,
			chars,
			filters : {
				id : '',
				season : ''
			},
			selectedQuotes : {}
		};

		componentDidMount() {
			this.filterQuotes(this.state.filters);
		}

		updateFilters = (filters) => {

			const newFilters = {...this.state.filters, ...filters};
			this.setState({
				filters : newFilters
			});

			this.filterQuotes(newFilters);


		};

		filterQuotes = ({ id, season } = {})  => {

			let filterQuotesObject = { ...this.state.quotes };

			if (id && filterQuotesObject[id]) {
				filterQuotesObject = { [id] : filterQuotesObject[id] };
			}

			if (season) {
				// filterQuotesObject = Object.keys(filterQuotesObject).map((person) => {
				Object.keys(filterQuotesObject).forEach((person) => {

					const seasonQuotes = filterQuotesObject[person].filter((quote) => {
						return quote.season === season;
					});

					filterQuotesObject[person] = seasonQuotes;

				});

			}

			this.setState({
				selectedQuotes : filterQuotesObject
			});

		};

		render() {

			return (
				<UnWrappedComponent
					{ ...this.props }
					{ ...this.state }
					updateFilters={ this.updateFilters }
				/>
			);

		}

	}

};

class SeasonSelector extends Component {
	state = {
		value : this.props.value
	};

	handleSeasonUpdate = ({target}) => {

		this.setState({
			value : target.value
		});

		this.props.onUpdate({
			season : target.value
		});

	};

	render() {

		const { handleSeasonUpdate, seasons } = this.props;

		return (
			<select value={this.state.value} onChange={ this.handleSeasonUpdate }>
				<option value="">All seasons</option>
				{
					seasons.map((season) => {
						return (<option value={ season }>Season { season }</option>);

					})
				}
			</select>
		);

	}


}

const BuffyTest = (props) => {

	const { selectedQuotes, seasons, quotes, filterQuotes, chars, updateFilters, filters } = props;


	const quoteChars = Object.keys(selectedQuotes);

	return (
		<div style={{textAlign : 'left'}}>
			<SeasonSelector
				seasons={ seasons }
				value={ filters.season }
				onUpdate={ updateFilters } />
			{
				quoteChars.map((quoteChar) => {
					const name = chars[quoteChar];
					const hasQuotes = selectedQuotes[quoteChar].length;

					// console.log(selectedQuotes[quoteChar])
					// return null;

					if (hasQuotes === 0) {
						return null;
					}

					return (
						<div>
							<h1> {name} </h1>
							<ul>
								{
									selectedQuotes[quoteChar].map((quote) => {
										return (
											<li>{quote.quote} - <em>Season {quote.season}</em></li>
										)
									})
								}
							</ul>
						</div>

					);
				})
			}
			<button onClick={ () => updateFilters({ id : '1', season : '5' }) }>Filter Quotes</button>
		</div>
	);

}

const WrappedBuffyTest = withBuffyQuotes(BuffyTest);

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
	      <WrappedBuffyTest stuff="this is some stuff"/>
      </div>
    );
  }
}

export default App;

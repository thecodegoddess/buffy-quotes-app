import React, { Component } from 'react';
import { func, shape, arrayOf, string, objectOf, array, object } from 'prop-types';
import './App.css';

import { quotes, seasons, chars} from './quotes/bq';


const withBuffyQuotes = (UnWrappedComponent) => {

	return class extends Component {

		static displayName = `withBuffyQuotes(${ UnWrappedComponent.displayName || UnWrappedComponent.name })`;

		state = {
			quotes,
			seasons,
			chars,
			filters : {
				id : '6',
				season : '1'
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
				Object.keys(filterQuotesObject).forEach((person) => {

					filterQuotesObject[person] = filterQuotesObject[person].filter((quote) => {
						return quote.season === season;
					});

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

	static propTypes = {
		onUpdate : func.isRequired,
		seasons : arrayOf(string).isRequired,
		value : string.isRequired
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

		const { seasons } = this.props;

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

class CharSelector extends Component {
	state = {
		value : this.props.value
	};

	static propTypes = {
	    value : string.isRequired,
        onUpdate : func.isRequired,
        chars : arrayOf(string).isRequired
    };

	handleCharUpdate = ({ target }) => {

		this.setState({
			value : target.value
		});

		this.props.onUpdate({
			id : target.value
		});

	};

	render() {
		const { chars } = this.props;

		return (
			<select
				value={ this.state.value }
				onChange={ this.handleCharUpdate }
			>
				<option value="">All</option>
				{
					chars.map((char, idx) => {
						return (
							<option value={ idx }> { char } </option>
						);
					})
				}
			</select>
		);
	}
}

const ShowQuotes = (props) => {

	const { selectedQuotes, seasons, chars, updateFilters, filters } = props;


	const quoteChars = Object.keys(selectedQuotes);
	const showChars = Object.keys(chars).map((key) => chars[key]);

	return (
		<div style={{textAlign : 'left'}}>
			<CharSelector
				chars={ showChars }
				value={ filters.id }
				onUpdate={ updateFilters }
			/>
			<SeasonSelector
				seasons={ seasons }
				value={ filters.season }
				onUpdate={ updateFilters }
			/>
			{
				quoteChars.map((quoteChar) => {
					const name = chars[quoteChar];
					const hasQuotes = selectedQuotes[quoteChar].length;

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
											<li>{ quote.quote } - <strong>Season { quote.season }</strong></li>
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

ShowQuotes.propTypes = {
    selectedQuotes : objectOf(array).isRequired,
    seasons : arrayOf(string).isRequired,
    chars : object.isRequired,
    updateFilters : func.isRequired,
    filters : shape({
        id : string,
        season : string
    }).isRequired
}

const BuffyQuotes = withBuffyQuotes(ShowQuotes);

const EvenMoreBuffy = (props) => {
	const { selectedQuotes, seasons, chars, updateFilters, filters } = props;


	const quoteChars = Object.keys(selectedQuotes);
	const showChars = Object.keys(chars).map((key) => chars[key]);
	return(
		<div style={{textAlign : 'left'}}>
			<CharSelector
				chars={ showChars }
				value={ filters.id }
				onUpdate={ updateFilters }
			/>
			<SeasonSelector
				seasons={ seasons }
				value={ filters.season }
				onUpdate={ updateFilters }
			/>
			<pre>
		    <code>{JSON.stringify(selectedQuotes, null, 4)}</code>
		</pre>
		</div>
	)
}

const MoreBuffy = withBuffyQuotes(EvenMoreBuffy);

class App extends Component {

  render() {


    return (
      <div className="App">


	      <MoreBuffy />

        <BuffyQuotes stuff="this is some stuff"/>
      </div>
    );
  }
}

export default App;

import { chars, quotes, seasons, images } from '../quotes/bq';
import React, { Component } from 'react';

const withBuffyQuotes = (UnWrappedComponent) => {

	return class extends Component {

		static displayName = `withBuffyQuotes(${ UnWrappedComponent.displayName || UnWrappedComponent.name })`;

		state = {
			quotes,
			seasons,
			chars,
			images,
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
			const newFilters = {...this.state.filters, ...filters };

			newFilters.id = (newFilters.id === '') ? 'all' : newFilters.id;

			newFilters.season = (newFilters.season === '') ? 'all' : newFilters.season;

			this.setState({
				filters : newFilters
			});

			this.filterQuotes(newFilters);


		};

		filterQuotes = ({ id, season } = {})  => {


			if ( id === '' && season === '') {
				return null;
			}

			let filterQuotesObject = { ...this.state.quotes };

			if (id && filterQuotesObject[id]) {
				filterQuotesObject = { [id] : filterQuotesObject[id] };
			}

			if (season && season !== 'all') {
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

export default withBuffyQuotes;

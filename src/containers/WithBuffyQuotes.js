import ShowQuotes from '../components/ShowQuotes';
import { connect } from 'react-redux';
import { filterQuotes } from '../actions';

/*

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


 */

function selectedQuotesSelector ({ quotes, filters }) {
	const {id = 'all', season = 'all'} = filters;

	if (id === '' && season === '') {
		return {};
	}

	let filterQuotesObject = {...quotes};

	if (id && filterQuotesObject[id]) {
		filterQuotesObject = {[id] : filterQuotesObject[id]};
	}

	if (season && season !== 'all') {
		Object.keys(filterQuotesObject).forEach((person) => {

			filterQuotesObject[person] = filterQuotesObject[person].filter((quote) => {
				return quote.season === season;
			});

		});
	// debugger;

	}
		return filterQuotesObject;
}


const mSTP = (state) => {
	const { images, chars, filters, seasons } = state;

	return {
		images,
		chars,
		filters,
		selectedQuotes : selectedQuotesSelector(state),
		seasons
	}
};

const mDTP = (dispatch) => {
	return {
		updateFilters(name, value) {
			dispatch(filterQuotes(name, value))
		}
	}
}

export default connect(mSTP, mDTP)(ShowQuotes);

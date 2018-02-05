import ShowQuotes from '../components/ShowQuotes';
import { connect } from 'react-redux';
import { filterQuotes as filter, quotes } from '../actions';
import { getSelectedQuotes } from '../reducers';

const mSTP = (state) => {
	const {
		images,
		chars,
		filters,
		seasons
	} = state;

	return {
		images,
		chars,
		filters,
		selectedQuotes : getSelectedQuotes(state),
		seasons
	}
};

const mDTP = (dispatch) => {

	return {

		updateFilters(name, value) {

			dispatch(filter.filterQuotes(name, value));

		},
		getQuotes() {

			return dispatch(quotes.getQuotes());

		}

	}

};

export default connect(mSTP, mDTP)(ShowQuotes);

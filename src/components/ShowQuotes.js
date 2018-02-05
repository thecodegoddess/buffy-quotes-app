import React, { Component } from 'react';
import {
	array,
	arrayOf,
	func,
	object,
	objectOf,
	shape,
	string
} from 'prop-types';
import FilterSelector from './FilterSelector';
import  './ShowQuotes.css';
import { CHAR_DEFAULT_OPTS, SEASON_DEFAULT_OPTS } from '../configs';

class ShowQuotes extends Component {

	static defaultProps = {
		show : '',
		selectedQuotes : {},
		seasons : [],
		chars : {},
		images : {},
		updateFilters : () => {},
		getQuotes : () => {},
		filters : {
			id : '',
			season : ''
		}
	};

	state = {
		characterOptions : [],
		seasonOptions : []
	};

	static propTypes = {
		show : string.isRequired,
		selectedQuotes : objectOf(array).isRequired,
		seasons : arrayOf(string).isRequired,
		chars : object.isRequired,
		images : object.isRequired,
		updateFilters : func.isRequired,
		getQuotes : func.isRequired,
		filters : shape({
			id : string,
			season : string
		}).isRequired
	};

	componentDidMount() {

		this.props.getQuotes();

	}

	quotesDisplay = () => {



	};

	characterDisplay = (quoteObject) => {

		const {
			selectedQuotes,
			chars,
			images,
		} = this.props;

		const name = chars[quoteObject];
		const hasQuotes = selectedQuotes[quoteObject].length;

		if (hasQuotes === 0) {
			return null;
		}

		return (
			<div className="c-show-quote__entry" key={ name }>
				<div className="c-show-quote__char">
					<h1 className="c-show-quote__title">{ name }</h1>
					<img
						alt={ name }
						className="c-show-quote__img"
						src={ images[quoteObject] }
					/>
				</div>
				<ul className="c-show-quote__quotes o-quotes u-no-list">
					{
						selectedQuotes[quoteObject].map((quote, idx) => {
							return (
								<li className="o-quotes__item" key={ `${name}_${idx}` }>
									<em className="o-quotes__text">{ quote.quote }</em> <span className="o-quotes__cite">Season { quote.season }</span>
								</li>
							)
						})
					}
				</ul>
			</div>

		);
	};

	render() {

		const {
			selectedQuotes,
			seasons,
			chars,
			updateFilters,
			filters,
			show
		} = this.props;

		const characterOptions = Object.keys(chars).map((key) => {

			return {
				value : key,
				label : chars[key]
			};

		});

		const seasonOptions = seasons.map((season) => {

			return {
				value : season,
				label : `Season ${season}`
			}

		});

		return (
			<div>
				<fieldset className="o-form-fields">
					<div className="o-flex-container o-flex-container--wrap">
						<h3 className="o-form-fields__title o-flex-container__full">Filter { show } Quotes</h3>
						<FilterSelector
							defaultOption={ CHAR_DEFAULT_OPTS }
							options={ characterOptions }
							update={ updateFilters }
							name={ 'id' }
							defaultValue={ filters.id }
							label={ 'Character' }
							id={ 'filterChar' }
						/>
						<FilterSelector
							defaultOption={ SEASON_DEFAULT_OPTS }
							options={ seasonOptions }
							update={ updateFilters }
							name={ 'season' }
							defaultValue={ filters.season }
							label={ 'Season' }
							id={ 'filterSeason' }
						/>
					</div>
				</fieldset>
				<div className="c-show-quote">
					{ Object.keys(selectedQuotes).map(this.characterDisplay) }
				</div>
			</div>
		);

	}

}

export default ShowQuotes;

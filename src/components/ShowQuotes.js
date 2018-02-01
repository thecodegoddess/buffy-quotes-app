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
import  './FilterSelector.css';
import { CHAR_DEFAULT_OPTS, SEASON_DEFAULT_OPTS } from '../configs';

class ShowQuotes extends Component {

	static propTypes = {
		show : string.isRequired,
		selectedQuotes : objectOf(array).isRequired,
		seasons : arrayOf(string).isRequired,
		chars : object.isRequired,
		images : object.isRequired,
		updateFilters : func.isRequired,
		filters : shape({
			id : string,
			season : string
		}).isRequired
	};

	render() {

		const {
			selectedQuotes,
			seasons,
			chars,
			updateFilters,
			filters,
			images,
			show
		} = this.props;

		// const quoteChars = Object.keys(selectedQuotes);
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
					{
						Object.keys(selectedQuotes).map((quoteObject) => {
							const name = chars[quoteObject];
							const hasQuotes = selectedQuotes[quoteObject].length;

							if (hasQuotes === 0) {
								return null;
							}

							return (
								<div className="c-show-quote__entry">
									<div className="c-show-quote__char">
										<h1 className="c-show-quote__title">{ name }</h1>
										<img
											className="c-show-quote__img"
											src={ images[quoteObject] }
										/>
									</div>
									<ul className="c-show-quote__quotes o-quotes u-no-list">
										{
											selectedQuotes[quoteObject].map((quote) => {
												return (
													<li className="o-quotes__item">
														<em className="o-quotes__text">{ quote.quote }</em> <span className="o-quotes__cite">Season { quote.season }</span>
													</li>
												)
											})
										}
									</ul>
								</div>

							);
						})
					}

				</div>
			</div>
		);
	}
}

export default ShowQuotes;

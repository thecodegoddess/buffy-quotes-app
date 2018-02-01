import React from 'react';
import { array, arrayOf, func, object, objectOf, shape, string } from 'prop-types';
import FilterSelector from './FilterSelector';

const ShowQuotes = (props) => {

	const { selectedQuotes, seasons, chars, updateFilters, filters, images } = props;
	const quoteChars = Object.keys(selectedQuotes);
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
					<h3 className="o-form-fields__title o-flex-container__full">Filter Buffy Quotes</h3>
					<FilterSelector
						defaultOption={ [{
							value : '',
							label : 'Select a Character'
						},{
							value : 'all',
							label : 'All Characters'
						}] }
						options={ characterOptions }
						update={ updateFilters }
						name={ 'id' }
						defaultValue={ filters.id }
						label={ 'Character '}
						id={ 'filterChar' }
					/>
					<FilterSelector
						defaultOption={ [{
							value : 'all',
							label : 'All Seasons'
						},{
							value : '',
							label : 'Select a Season'
						}] }
						options={ seasonOptions }
						update={ updateFilters }
						name={ 'season' }
						defaultValue={ filters.season }
						label={ 'Season '}
						id={ 'filterSeason' }
					/>
				</div>


			</fieldset>
			<div className="c-buffy-quote">
				{
					quoteChars.map((quoteChar) => {
						const name = chars[quoteChar];
						const hasQuotes = selectedQuotes[quoteChar].length;

						if (hasQuotes === 0) {
							return null;
						}

						return (
							<div className="c-buffy-quote__entry">
								<div className="c-buffy-quote__char">
									<h1 className="c-buffy-quote__title">{ name }</h1>
									<img
										className="c-buffy-quote__img"
										src={ images[quoteChar] }
									/>
								</div>
								<ul className="c-buffy-quote__quotes o-quotes u-no-list">
									{
										selectedQuotes[quoteChar].map((quote) => {
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

ShowQuotes.propTypes = {
	selectedQuotes : objectOf(array).isRequired,
	seasons : arrayOf(string).isRequired,
	chars : object.isRequired,
	updateFilters : func.isRequired,
	filters : shape({
		id : string,
		season : string
	}).isRequired
};

export default ShowQuotes;

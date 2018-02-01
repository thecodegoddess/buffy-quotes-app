import React from 'react';
import FormSelect from './FormSelect';
import { arrayOf, func, shape, string } from 'prop-types';
import './FilterSelector.css';

const FilterSelector = (props) => {

	const { id,
		name,
		label,
		update,
		options,
		defaultValue,
		defaultOption
	} = props;

	return (
		<div className="c-filter-selectors">
			<label htmlFor={ id } className="o-label o-label--left">{ label }</label>
			<FormSelect
				nameValue={ name }
				idValue={ id }
				onUpdate={ update }
				options={ options }
				defaultValue={ defaultValue }
				defaultOption={ defaultOption }
			/>
		</div>
	);

};

FilterSelector.propTypes = {
	id : string.isRequired,
	name : string.isRequired,
	label : string.isRequired,
	update : func.isRequired,
	options : arrayOf(shape({
		label : string,
		value : string
	})),
	defaultValue : string.isRequired,
	defaultOption : arrayOf(shape({
		label : string.isRequired,
		value : string.isRequired
	})).isRequired
};

export default FilterSelector;

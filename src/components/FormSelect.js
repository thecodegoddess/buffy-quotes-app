import React, { Component } from 'react';
import { arrayOf, func, string, shape } from 'prop-types';

class FormSelect extends Component {
	state = {
		value : this.props.defaultValue || ''
	};

	static propTypes = {
		onUpdate : func.isRequired,
		nameValue : string.isRequired,
		options : arrayOf(shape({
			value : string.isRequired,
			label : string.isRequired
		})).isRequired,
		defaultValue : string,
		idValue : string,
		defaultOption : shape({
			value : string.isRequired,
			label : string.isRequired
		}),
	};

	handleSeasonUpdate = ({ target }) => {

		this.setState({
			value : target.value
		});

		this.props.onUpdate({
			[target.name] : target.value
		});

	};

	static createDefault({ value, label }) {
		return (<option value={ value }>{ label }</option>);
	}

	render() {

		const { options, defaultOption, idValue, nameValue } = this.props;

		return (
			<span className="o-select">
				<select
					name={ nameValue }
					id={ idValue || '' }
					value={ this.state.value }
					className="o-select__input"
					onChange={ this.handleSeasonUpdate }
				>
					{ defaultOption ? (FormSelect.createDefault(defaultOption)) : null }
					{
						options.map((option) => {
							return (<option
								className="o-select__option"
								value={ option.value }
							>{ option.label }</option>);
						})
					}
				</select>
			</span>
		);

	}


}

export default FormSelect;

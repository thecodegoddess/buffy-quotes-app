import React, { Component } from 'react';
import {
	arrayOf,
	func,
	string,
	shape
} from 'prop-types';
import './FormSelect.css';

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
		defaultOption : arrayOf(shape({
			value : string.isRequired,
			label : string.isRequired
		})),
	};

	componentWillReceiveProps(nextProps) {

		if
		(nextProps.defaultValue !== this.state.value) {

			this.setState({ value : nextProps.defaultValue });

		}

	}

	handleOnChange = ({ target }) => {

		this.setState({
			value : target.value
		});

		this.props.onUpdate(target.name, target.value);

	};

	static createDefault({ value, label }) {

		return (<option value={ value } key={ label }>{ label }</option>);

	}

	render() {

		const {
			options,
			defaultOption,
			idValue,
			nameValue
		} = this.props;

		return (
			<span className="o-select">
				<select
					name={ nameValue }
					id={ idValue || '' }
					value={ this.state.value }
					className="o-select__input"
					onChange={ this.handleOnChange }
				>
					{
						defaultOption ?
							(defaultOption.map((opt) => FormSelect.createDefault(opt))) :
							null
					}
					{
						options.map((option) => {

							return (<option
								key={ option.value }
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

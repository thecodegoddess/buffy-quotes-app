import { shallow } from 'enzyme';
import React from 'react';
import Component from './FilterSelector';
import FormSelect from './FormSelect'

const props = {
	id : 'my-id',
	name : 'selector-name',
	label : 'selector-label',
	update : () => {},
	options : [{
		label : 'label option',
		value : 'value option',
	}],
	defaultValue : 'this is the default',
	defaultOption : [{
		label : 'default label',
		value : 'default value'
	}]
};

it('Filter Selector Component', () => {
	const wrapper = shallow(<Component {...props } />);
	expect(wrapper.find('label')).toHaveText(props.label);
	expect(wrapper.find('FormSelect')).toBePresent();
	// console.log(wrapper.find('FormSelect').debug());
});

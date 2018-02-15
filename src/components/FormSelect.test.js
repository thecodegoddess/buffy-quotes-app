import { shallow } from 'enzyme';
import React from 'react';
import Component from './FormSelect';

const props = {
	onUpdate : jest.fn(),
	options : [{
		label : 'label option',
		value : 'value option',
	}],
	defaultValue : 'default value',
	nameValue : 'test'
};

it('Form Select test', () => {
	const wrapper = shallow(<Component { ...props }/>);
	const simEventObj = {
		target : {
			name : 'test',
			value : 'test'
		}
	};
	const updateProp = { defaultValue : 'amber' };

	expect(wrapper.state().value).toBe(props.defaultValue);
	wrapper.find('select').simulate('change', simEventObj);
	expect(wrapper.state().value).toBe(simEventObj.target.value);

	expect(props.onUpdate).toHaveBeenCalled();
	wrapper.setProps(updateProp);
	expect(wrapper.state().value).toBe(updateProp.defaultValue);
});

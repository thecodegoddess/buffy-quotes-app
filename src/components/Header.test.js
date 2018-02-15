import { shallow } from 'enzyme';
import React from 'react';
import Component from './Header';

const props = {
	title : 'Here is my title'
};

it('Header renders', () => {
	const wrapper = shallow(<Component { ...props } />);
	expect(wrapper.find('h1')).toBePresent();
	expect(wrapper.find('h1').text()).toBe(props.title);
	expect(wrapper.find('svg')).toBePresent();
});

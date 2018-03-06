import React from 'react';
import { shallow } from 'enzyme';
import Component from './ShowQuotes';
import FilterSelector from './FilterSelector';
import { seasons, images, chars, quotes } from '../quotes/bq';

const props = {
	show : 'show text',
	selectedQuotes : { '8' : [...quotes['8']] },
	seasons,
	images,
	updateFilters : jest.fn(),
	getQuotes : jest.fn(),
	filters : {
		id : '',
		season : ''
	},
};

it('Show Quotes', () => {
	const wrapper = shallow(<Component { ...props }/>);
	// console.log(expect(wrapper.find('FilterSelector')).toMatchElement(<FilterSelector />));
	expect(wrapper.find('FilterSelector')).toHaveLength(2);
});

import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from '../guess-count';

describe('guessCount', ()=>{
	it('should render the guessCount without crashing', ()=>{
		shallow(<GuessCount />);
	});
	it('should render the correct guessCount', ()=>{
		let guess = 99;
		const wrapper = shallow(<GuessCount count= {value} />);
		expect(wrapper.text()).toEqual(`Guess #{value}!`);
	});
});
import React from 'react';
import {shallow} from 'enzyme';

import {makeGuess} from '../../actions/actions';
import GuessForm from 'guess-form';

describe('GuessForm', ()=>{
	it('should render without crashing', ()=>{
		shallow(<GuessForm />);
	});
	it('should dispatch makeGuess when the form is submitted', ()=>{
		const dispatch = jest.fn;
		const wrapper = mount(<GuessForm dispatch={dispatch} />);
		const node = "10";
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
	});
	it('should reset the input when the form is submitted', ()=>{
		const wrapper = mount(<GuessForm dispatch = {()=>{}} />);
		const input = wrapper.find('input[type="text"]');
		input.node.value = 10;
		wrapper.simulate('submit');
		expect(input.node.value).toEqual('');
	});
});
import React from 'react';
import {shallow} from 'enzyme';

import {toggleInfoModal} from '../../actions/actions';

import {InfoModal} from '../info-modal';


describe('InfoModal', ()=>{
	it('should render without crashing', ()=>{
		shallow(<InfoModal />);
	});
	it('should close the info modal on click', ()=>{
		const dispatch  = jest.fn();
		const wrapper = shallow(<InfoModal dispatch={dispatch} />);
		wrapper.find('.close').simulate('click', {
			preventDefault(){}
		});
		expect(dispatch).toHaveBeenCalled();
		expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());
	});
});
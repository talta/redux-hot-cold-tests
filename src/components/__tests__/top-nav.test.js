import React from 'react';
import {shallow} from 'enzyme';

import {NEW_GAME, toggleInfoModal} from '../../actions/actions';
import {TopNav} from '../top-nav';

describe('topNav', ()=>{
	it('should render without crashing', ()=>{
		shallow(<TopNav />);
	});
	it('should dispatch newGame when newGame button clicked', ()=>{
		const dispatch = jest.fn();
		const wrapper = shallow(<TopNav dispatch={dispatch}/>)
		const link = wrapper.find('.new');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(dispatch).toHaveBeenCalled();
		expect(dispatch.mock.calls[0][0].type).toEqual(NEW_GAME);
	});
	it('should display the infoModal when button selected', ()=>{
		const dispatch = jest.fn();
		const wrapper = shallow(<TopNav dispatch={dispatch} />);
		const link = wrapper.find('.what');
		link.simulate('click', {
			preventDefault(){}
		});
		expect(dispatch).toHaveBeenCalled();
		expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());
	});
});
import React from 'react';
import {shallow} from 'enzyme';


describe('<Board />', ()=>{
	it('renders without crashing', ()=>{
		shallow(<Game />);
	});
});
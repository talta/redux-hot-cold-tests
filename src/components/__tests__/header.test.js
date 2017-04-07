import React from 'react';
import {shallow} from 'enzyme';

import {Header} from '../header';
import infoModal from '../info-modal';

describe('Header', ()=>{
	it('should render without crashing', () =>{
		shallow(<Header />);
	});
	it('should not render the infoModal when set to false', ()=>{
		const wrapper = shallow(<Header showInfoModal={false} />);
		expect(wrapper.find(infoModal).exists()).toEqual(false);
	});
	it('should render the infoModal when set to true', ()=>{
		const wrapper = shallow(<Header showInfoModal={true} />);
		expect(wrapper.find(infoModal).exists()).toEqual(true);
	});
});
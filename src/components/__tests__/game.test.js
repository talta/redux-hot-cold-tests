import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


describe('<Board />', ()=>{
	it('renders without crashing', ()=>{
		shallow(<Game />);
	});
});
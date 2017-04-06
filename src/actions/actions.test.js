import React from 'react';
import {shallow} from 'enzyme';

import {
	NEW_GAME,
	newGame,
	MAKE_GUESS,
	makeGuess,
	TOGGLE_INFO_MODAL,
	toggleInfoModal
} from './actions';

describe('newGame', ()=>{
	it('should reset the state', ()=>{
		////this may not need to be declared;
		const state={correctAnswer: 10};
		const action = newGame();
		expect(action.type).toEqual(NEW_GAME);
		////the correctAnswer may not be able to be asserted
		expect(action.correctAnswer).not.toEqual(state.correctAnswer);
	});
});

describe('makeGuess', ()=>{
	it('should attempt a guess', ()=>{
		const guess = 23;
		const action = makeGuess(guess);
		expect(action.type).toEqual(MAKE_GUESS);
		expect(action.guess).toEqual(guess);
	});
});

describe('toggleInfoModal', ()=>{
	it('should toggle the info modal', ()=>{
		const action = toggleInfoModal();
		expect(action.type).toEqual(TOGGLE_INFO_MODAL);
	});
});
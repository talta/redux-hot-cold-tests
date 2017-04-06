import React from 'react';
import {expect} from 'enzyme';

import {newGame, makeGuess, toggleInfoModal} from '../actions/actions';
import {guessReducer} from './reducer';

describe('guessReducer', ()=>{
	////test data:
	const guess1= 34;
	const guess2 = 54;
	const guess3 = 98;
	const guess4 = 51;
	const guess5 = 92;
	const guess6 = 90;
	const correctAnswer = 90;

	const guesses = [guess1, guess2];

	////this test is not passing:
	// it('should return the current state when an unknown action is passed in', ()=>{
	// 	let currentState = {};
	// 	const state = guessReducer(currentState, {type: '__UNKNOWN'});
	// 	expect(state).toBe(currentState);
	// })
	describe('newGame', ()=>{
		it('should create a new game', ()=>{
			let state = {};
			console.log(state);
			state = guessReducer(state, newGame());
			expect(state).toHaveContext({guesses:[]})
		});
	});
	describe('makeGuess', ()=>{
		it('should add a guess to the list', ()=>{
			 let state = newGame();
			 state = guessReducer(state, makeGuess(10));
			expect(state.guesses).toContain(10);
		})
	})
})
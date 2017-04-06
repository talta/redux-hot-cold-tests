import React from 'react';
// import {expect} from 'enzyme';

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
			// console.log(state);
			// console.log(expect);
			state = guessReducer(state, newGame());
			// expect(state).toHaveContext({guesses:[]})
			///expect that the state.guesses is empty
			expect(state.guesses).toEqual([]);
		});
	});
	describe('makeGuess', ()=>{
		it('should add a guess to the list', ()=>{
			 let state = newGame();
			 state = guessReducer(state, makeGuess(10));
			expect(state.guesses).toContain(10);
		});
		it('should not allow guesses which are not a number', ()=>{
			let state = newGame();
			state = guessReducer(state, makeGuess('jhubni'));
			expect(state.feedback).toEqual('Please enter a valid number');
		});
	});
	describe('makeGuess difference', ()=>{
		it('should be cold for large differences', ()=>{
			let state = newGame();
			state.correctAnswer = 99;
			state  = guessReducer(state, makeGuess(30));
			expect(state.feedback).toEqual('You\'re Ice Cold...');
		});
		it('should be chilly for largish differences', ()=>{
			let state = newGame();
			state.correctAnswer =99;
			state = guessReducer(state, makeGuess(50));
			expect(state.feedback).toEqual('You\'re a chilly dog');
		});
		it('should be warm within 10 degrees', ()=>{
			let state = newGame();
			state.correctAnswer = 99;
			state = guessReducer(state, makeGuess(89));
			expect(state.feedback).toEqual('You\'re Warm');
		});
		it('should be hot within 1 degree', ()=>{
			let state = newGame();
			state.correctAnswer = 99;
			state = guessReducer(state, makeGuess(98));
			expect(state.feedback).toEqual('You\'re Hot!');
		});
		it('should detect the right answer', ()=>{
			let state = newGame();
			state.correctAnswer = 99;
			state = guessReducer(state, makeGuess(99));
			expect(state.feedback).toEqual('You got it!');
		});
	});
})
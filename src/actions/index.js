import axios from 'axios';

import { getLetterMatchingCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  GIVE_UP: 'GIVE_UP',
  RESET_GUESSED_WORDS: 'RESET_GUESSED_WORDS',
};

//removed when thunk was added
// /**
//  * @function correctGuess
//  * @returns {object} - Action object with type `CORRECT_GUESS`
//  */
// export function correctGuess() {
//   return { type: actionTypes.CORRECT_GUESS };
// }

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = guessedWord => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchingCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    })

    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS,
      })
    }
  };
};

export const resetGuessWords = () => {
  return function (dispatch) {
    dispatch({
      type: actionTypes.RESET_GUESSED_WORDS
    })
  }
}

export const getSecretWord = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3030')
      .then(response => {
        dispatch({
          type: actionTypes.SET_SECRET_WORD,
          payload: response.data
        })
      })
  }
}

export const giveUp = payload => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GIVE_UP,
      payload
    })
  }
}

export const resetGuessedWords = payload => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.RESET_GUESSED_WORDS,
      payload
    })
  }
}
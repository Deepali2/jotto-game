import { actionTypes } from '../actions';

/**
 * @function resetGuessedWords
 * @param {array} state - State before reducer
 * @param {object} action - action to be reduced
 * @returns {array} - empty array
 */
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.RESET_GUESSED_WORDS:
      return [];
    default:
      return state;
  }
}
import { actionTypes } from '../actions';

/**
 * @function giveUpReducer
 * @param {boolean} state - boolean true/false
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 */

export default (state = false, action) => {
  switch (action.type) {
    case (actionTypes.GIVE_UP):
      return action.payload;
    default:
      return state;
  }
}
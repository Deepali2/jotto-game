import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is not true)
 */
const Congrats = (props) => {
  return (
    <div>
      {props.success && (
        <div data-test='component-congrats' className='alert alert-success'>
          <span data-test='congrats-message'>Congratulation! You guessed the word!</span>
        </div>
      )}
      {!props.success && (
        <div data-test='component-congrats'></div>
      )}
    </div>

  )
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,

}

export default Congrats;
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { giveUp } from './actions';

const GiveUp = props => {
  const handleGiveUp = () => {
    props.giveUp(true);
  }
  let contents;
  if (!props.givenUp) {
    contents = (
      <button
        type='submit'
        className='btn btn-primary mb-2 mx-sm-3'
        onClick={handleGiveUp}
      >
        Give up?
      </button>
    )
  } else {
    contents = (
      <div>The secret word is {props.secretWord}</div>
    )
  }
  return (
    <div>{contents}</div>
  )
}

const mapStateToProps = state => {
  const { givenUp, secretWord } = state;
  return { givenUp, secretWord };
}

GiveUp.propTypes = {
  givenUp: PropTypes.bool.isRequired,
  secretWord: PropTypes.string
}

export default connect(mapStateToProps, { giveUp })(GiveUp);
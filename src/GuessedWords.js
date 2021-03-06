import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { giveUp } from './actions';
import { getSecretWord } from './actions';
import { resetGuessWords } from './actions';

const GuessedWords = (props) => {
  const resetGame = () => {
    props.giveUp(false);
    props.getSecretWord();
    props.resetGuessWords();
  }
  let contents;
  if (props.givenUp) contents = (
    <button
      onClick={resetGame}
      type='submit'
      className='btn btn-primary mb-2 mx-sm-3'
    >
      Play Again
    </button>
  );
  if (props.guessedWords.length === 0 && !props.givenUp) {
    contents = (
      <span data-test='guess-instructions'>Try to Guess the Secret Word!</span>
    )
  } else if (props.guessedWords.length !== 0 && !props.givenUp) {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr data-test='guessed-word' key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));

    contents = (
      <div data-test='guessed-words'>
        <h3>Guessed Words</h3>
        <table className='table table-sm'>
          <thead className='thead-light'>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWordsRows}
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div data-test='component-guessed-words'>{contents}</div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired,
}

const mapStateToProps = state => {
  const { givenUp } = state;
  return { givenUp }
}

export default connect(mapStateToProps, { giveUp, getSecretWord, resetGuessWords })(GuessedWords);
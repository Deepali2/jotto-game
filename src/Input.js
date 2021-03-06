import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  /**
   * @method constructor
   * @param {object} props - Component props.
   * @returns {undefined}
   */
  constructor(props) {
    super(props);

    //initialize the state
    this.state = { currentGuess: null }
  }

  submitGuessWord = (e) => {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: '' });
    }
  }

  render() {
    const contents = this.props.success || this.props.givenUp
      ? null
      : (
        <form className='form-inline'>
          <input
            data-test='input-box'
            className='mb-2 mx-sm-3'
            type='text'
            value={this.state.currentGuess || ''}
            onChange={(e) => this.setState({ currentGuess: e.target.value })}
            placeholder='enter guess'
          />
          <button
            data-test='submit-button'
            className='btn btn-primary mb-2'
            onClick={(e) => this.submitGuessWord(e)}
            type='submit'
          >
            Submit
          </button>
        </form>
      )
    return (
      <div data-test='component-input'>
        {contents}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
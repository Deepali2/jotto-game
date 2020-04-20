import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import GiveUp from "./GiveUp";

const defaultProps = {
  givenUp: false,
}
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GiveUp {...setupProps} />)
}

describe('render', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ givenUp: false });
  });
  console.log(wrapper);
  describe('player has not given up', () => {
    test('renders the Give Up Button', () => {
      const giveUpButton = findByTestAttr(wrapper, 'giveup-button');
      expect(giveUpButton.length).toBe(1);
    });
    test('does not render the secret word text', () => {
      const secretWordText = findByTestAttr(wrapper, 'giveup-secret-word');
      expect(secretWordText.length).toBe(0);
    });
  });

  describe('player has given up', () => {
    //simulate clicking of the give up button
    const giveUpButton = findByTestAttr(wrapper, 'giveup-button');
    giveUpButton.simulate('click', { preventDefault() { } });
    wrapper.setState({ givenUp: true });

    test('does not render the Give Up Button', () => {
      expect(giveUpButton.length).toBe(0);
    });
    test('renders the secret word text', () => {
      const secretWordText = findByTestAttr(wrapper, 'giveup-secret-word');
      expect(secretWordText.length).toBe(1);
    });
  });
});
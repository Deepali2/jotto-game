import { getLetterMatchingCount } from './';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  test('returns correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchingCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test('returns the correct count when there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchingCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test('returns correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchingCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  });
})
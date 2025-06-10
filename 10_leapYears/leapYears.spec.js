const leapYears = require('./leapYears')

describe('leapYears', () => {
  test('works with non century years', () => {
    expect(leapYears(1996)).toBe(true);
  });
  skip('works with non century years', () => {
    expect(leapYears(1997)).toBe(false);
  });
  skip('works with ridiculously futuristic non century years', () => {
    expect(leapYears(34992)).toBe(true);
  });
  skip('works with century years', () => {
    expect(leapYears(1900)).toBe(false);
  });
  skip('works with century years', () => {
    expect(leapYears(1600)).toBe(true);
  });
  skip('works with century years', () => {
    expect(leapYears(700)).toBe(false);
  });
});

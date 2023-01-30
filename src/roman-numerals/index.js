/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  var romanNumeral = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var str = '';

  for (var index of Object.keys(romanNumeral)) {
    var getVal = Math.floor(roman / romanNumeral[index]);
    roman -= getVal * romanNumeral[index];
    str += index.repeat(getVal);
  }

  return str;

}

module.exports = romanToDecimal;

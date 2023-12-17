// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('').map(d => +d);
  if (digits.length <= 1) return 0;
  const arr = [];

  for (let i = 0; i < digits.length; i++) {
    arr.push(
      digits
        .slice(0, i)
        .concat(digits.slice(i + 1, digits.length))
        .join(''),
    );
  }

  return Math.max(...arr);
}

module.exports = {
  deleteDigit,
};

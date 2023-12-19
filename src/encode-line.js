// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';
  let encodedline = '';
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      encodedline += !count ? str[i] : count + 1 + str[i];
      count = 0;
    }
  }
  encodedline += !count ? str.at(-1) : count + 1 + str.at(-1);
  return encodedline;
}

module.exports = {
  encodeLine,
};

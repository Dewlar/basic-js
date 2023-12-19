// const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str += '';
  options.addition === undefined ? (options.addition = '') : options.addition += '';

  options.repeatTimes || (options.repeatTimes = 1);
  options.separator || (options.separator = '+');
  options.additionRepeatTimes || (options.additionRepeatTimes = 1);
  options.additionSeparator || (options.additionSeparator = '|');

  let additionStr = new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);

  return new Array(options.repeatTimes).fill(str + additionStr).join(options.separator);
}

module.exports = {
  repeater,
};

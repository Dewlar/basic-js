// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let symbols = new Set(s1 + s2);
    let commonCharacterCount = 0;
    for (let symbol of symbols) {
        let sameSymbolCount1 = s1.split(symbol).length - 1;
        let sameSymbolCount2 = s2.split(symbol).length - 1;
        commonCharacterCount += Math.min(sameSymbolCount1, sameSymbolCount2);
    }
    return commonCharacterCount;
}

module.exports = {
    getCommonCharacterCount,
};

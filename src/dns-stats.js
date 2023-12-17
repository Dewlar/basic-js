// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = {};
  let splittedDomain = domains
    .map(domain => domain
      .split('.')
      .map(el => '.' + el)
      .reverse(),
    );
  splittedDomain.forEach(domain => domain
    .reduce((str, d) => {
      let s = str + d;
      stats.hasOwnProperty(s) ? stats[s]++ : stats[s] = 1;
      return s;
    }, ''));

  return stats;
}

module.exports = {
  getDNSStats,
};

// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  #isReverse;
  #alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(isReverse) {
    this.#isReverse = isReverse;
  }

  encrypt(message, key) {
    this.#checkArguments(message, key);
    const letters = message.toUpperCase().split('');
    const keyString = this.#keyStringGeterator(letters, key.toUpperCase());

    return this.#transformString(letters, keyString, true);
  }

  decrypt(message, key) {
    this.#checkArguments(message, key);
    const letters = message.toUpperCase().split('');
    const keyString = this.#keyStringGeterator(letters, key.toUpperCase());

    return this.#transformString(letters, keyString, false);
  }

  #checkArguments(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
  }

  #transformString(letters, keyString, isEncryptMethod) {
    let resultStr = letters
      .map((letter, index) => {
        if (/[a-zA-Z]/g.test(letter)) {
          let indexOfPlainString = this.#alphabet.indexOf(letter);
          let indexOfKeyString = this.#alphabet.indexOf(keyString[index]);

          return isEncryptMethod
            ? this.#alphabet.at(indexOfPlainString + indexOfKeyString)
            : this.#alphabet.at(26 + indexOfPlainString - indexOfKeyString);
        } else {
          return letter;
        }
      })
      .join('');

    return this.#isReverse === false ? this.#stringReverse(resultStr) : resultStr;
  }

  #stringReverse(str) {
    return str.split('').reverse().join('');
  }

  #keyStringGeterator(letters = [], key = '') {
    let nonWordCharCount = 0;
    key = key.match(/[A-Z]/g).join('');

    return letters.map((letter, index) => {
      if (/[A-Z]/g.test(letter)) {
        return key.at((index - nonWordCharCount) % key.length);
      } else {
        nonWordCharCount++;
        return letter;
      }
    });
  }
}

module.exports = {
  VigenereCipheringMachine
};

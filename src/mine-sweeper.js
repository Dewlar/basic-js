// const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mineSweeperMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    mineSweeperMatrix.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      let rowStart = Math.max(i - 1, 0);
      let rowEnd = Math.min(i + 1, matrix.length - 1);
      let colStart = Math.max(j - 1, 0);
      let colEnd = Math.min(j + 1, matrix[0].length - 1);

      for (let x = rowStart; x <= rowEnd; x++) {
        for (let y = colStart; y <= colEnd; y++) {
          if (x !== i || y !== j) matrix[x][y] && count++;
        }
      }
      mineSweeperMatrix[i].push(count);
    }
  }
  return mineSweeperMatrix;
}

module.exports = {
  minesweeper
};

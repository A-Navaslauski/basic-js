const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let count = 0
  for (let i =0; i<arr.length; i++){
    for (let i2 =0; i2<arr[i].length; i2++){
    if (arr[i][i2] === '^^'){
      count++
    }
    }
  }
  return count
}

module.exports = {
  countCats
};



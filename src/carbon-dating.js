const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(activity) {
  let act
  act = parseFloat(activity)

  if (typeof activity !== 'string'){
    return false
  } 
  
  if (isNaN(act)){
    return false
  } 
  
  if (activity > MODERN_ACTIVITY || activity <= 0){
    return false
  } 

  let num = Math.log(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD / Math.LN2
  num = Math.ceil(num)
  return num
}

module.exports = {
  dateSample
};

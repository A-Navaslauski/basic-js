const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (date === undefined){
    return 'Unable to determine the time of year!'
  } 
 
  try {
    let i = date.getMonth()
  } catch(error) {
    throw new Error('Invalid date!')
  }
  try {
  if (date.getUTCMonth() < 2 || date.getUTCMonth() > 10){
    return 'winter'
  } 
  else if (date.getUTCMonth() < 5) {
    return 'spring'
  }
  else if (date.getUTCMonth() < 8){
    return 'summer'
  } 
  else {
    return 'autumn'
  } 
  } catch {
    throw new Error('Invalid date!')
  }
  
}

module.exports = {
  getSeason
};

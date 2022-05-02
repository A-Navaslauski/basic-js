const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let name = ''

  if (Array.isArray(arr) === false) {
      return false
  }

  for (let i=0; i<arr.length; i++){
    if (typeof arr[i] !== 'string') {
     continue
    }
    else{
      name = name + arr[i].trim().toUpperCase()[0]
    }
    
  }
  if (name === '') {
    return false
  }
  name = name.split('')
  name = name.sort()
  return name.join('')
}

module.exports = {
  createDreamTeam
};

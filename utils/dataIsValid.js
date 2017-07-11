const { keys, length, values } = require('ramda')

/**
 * Valid data should have one key and one value
 * @param {Object} data
 * @returns {Boolean} true if data is valid, otherwise false
 */
function dataIsValid (data = {}) {
  const hasOneKey = length(keys(data)) === 1
  const hasOneValue = length(values(data)) === 1

  return hasOneKey && hasOneValue
}

module.exports = dataIsValid

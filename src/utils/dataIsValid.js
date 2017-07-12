const { is, keys, length } = require('ramda')

/**
 * Valid data should have one key and one value
 * @param {Object} data
 * @returns {Boolean} true if data is valid, otherwise false
 */
function dataIsValid (data) {
  const isObject = is(Object)
  const hasOneKey = x => length(keys(x)) === 1

  return isObject(data) && hasOneKey(data)
}

module.exports = dataIsValid

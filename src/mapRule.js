const { head, is, keys, length, values } = require('ramda')
const runRule = require('./runRule')

module.exports = mapRule

/**
 * @description Map a given rule over a list and return the first error if any,
 * otherwise return null.
 * @param {Object} rule a rule to be run against all items in the given arr
 * @param {Object} data a data object with single key and value to be tested,
 * where the value must be an array
 * @returns {*} returns an object with failing rule for first failing instance
 * of data, otherwise returns null
 */
function mapRule (rule) {
  return function (data) {
    const key = head(keys(data))
    const elements = head(values(data))
    const arr = is(Array, elements) ? elements : [elements]

    for (let idx = 0; idx < length(arr); idx++) {
      const element = arr[idx]
      const err = runRule(rule, { [key]: element })

      if (err) {
        return err
      }
    }

    return null
  }
}

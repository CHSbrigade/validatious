const { complement, compose, find, is, isNil, map } = require('ramda')
const runRule = require('./runRule')

module.exports = runRules

/**
 * Run all rules in a given array against data and return result for first
 * failure encounterd. Rules will be run in the order they are provided.
 *
 * @param {Array} rules Set of rules to be run against data, will be run in
 * order and only result for first failing rule will be returned.
 * @param {Object} data
 * @returns {*} Returns a failure object if an error is encountered, otherwise
 * returns null.
 */
function runRules (rules, data) {
  // throw if rules is not an Array
  if (!is(Array, rules)) {
    throw new Error('Rules should be an Array')
  }

  const getFirstError = find(complement(isNil))
  const runValidation = (rule, data) => runRule(rule, data)

  const runAllAndReturnFirstError = compose(
    getFirstError,
    map(rule => runValidation(rule, data))
  )

  return runAllAndReturnFirstError(rules) || null
}

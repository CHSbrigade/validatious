const { head, keys, values } = require('ramda')
const { dataIsValid, ruleIsValid } = require('./utils')

module.exports = runRule

/**
 * @param {Object} rule
 * @param {Object} data a data object with single key and value to be tested
 * @returns {*} returns an object with error info if rule fails, otherwise
 * returns null
 */
function runRule (rule, data) {
  // throw if invalid rule
  if (!ruleIsValid(rule)) {
    throw new Error(`Invalid rule: ${rule}`)
  }

  // throw if invalid data
  if (!dataIsValid(data)) {
    throw new Error(`Invalid data: ${data}`)
  }

  const key = head(keys(data))
  const value = head(values(data))

  if (rule.evaluator(value)) {
    return null
  }

  return {
    key,
    ruleName: rule.name,
    errorMsg: rule.errorMsg(value),
  }
}

const { is } = require('ramda')

/**
 * @description Return true if given rule is valid
 * @param {Object} rule
 * @returns {Boolean}
 */
function ruleIsValid (rule = {}) {
  // first check that we have an object
  const ruleIsObject = is(Object, rule)
  if (!ruleIsObject) {
    return false
  }

  // then check the components of that object
  const nameIsValid = is(String, rule.name)
  const evaluatorIsValid = is(Function, rule.evaluator)
  const errorMsgIsValid = is(Function, rule.errorMsg)

  return nameIsValid && evaluatorIsValid && errorMsgIsValid
}

module.exports = ruleIsValid

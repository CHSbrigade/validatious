const { isNil } = require('ramda')
const { type } = require('..')

/**
 * @description Return true if data exactly matches the given value.
 */
module.exports = exactMatcher => ({
  name: 'string/matchesExactly',
  evaluator: x => isNil(x) || x === exactMatcher,
  errorMsg: x => `Expected '${x}' to exactly match '${exactMatcher}'`,
  prereqs: [type(String)],
})

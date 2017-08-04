const { isNil } = require('ramda')
const { type } = require('..')

/**
 * @description Fails if the given value is less than the specified value
 */
module.exports = min => ({
  name: 'number/min',
  evaluator: x => isNil(x) || x >= min,
  errorMsg: x => `Expected '${x}' to be greater than or equal to '${min}'`,
  prereqs: [type(Number)],
})

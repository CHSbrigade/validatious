const { isNil } = require('ramda')
const { type } = require('..')

/**
 * @description Fails if the given value is greater than the specified value
 */
module.exports = max => ({
  name: 'number/max',
  evaluator: x => isNil(x) || x <= max,
  errorMsg: x => `Expected '${x}' to be less than or equal to '${max}'`,
  prereqs: [type(Number)],
})

const { isNil, length } = require('ramda')

/**
 * @description This rule fails if the length of the provided string is less
 * than the min specified. It will pass if value is undefined.
 */
module.exports = len => ({
  name: 'string/minLength',
  evaluator: x => isNil(x) || length(x) >= len,
  errorMsg: x => `Expected '${x}' to be at least ${len} characters in length`,
  prereqs: [],
})

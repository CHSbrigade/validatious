const { isNil, length } = require('ramda')

/**
 * @description This rule fails if the length of the provided string is greater
 * than the max specified. It will pass if value is undefined.
 */
module.exports = len => ({
  name: 'string/maxLength',
  evaluator: x => isNil(x) || length(x) <= len,
  errorMsg: x =>
    `Expected '${x}' to be no greater than ${len} characters in length`,
  prereqs: [],
})

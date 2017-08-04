const { isNil } = require('ramda')

/**
 * @description Check that the value is not nil
 */
module.exports = {
  name: 'isNotNil',
  evaluator: x => !isNil(x),
  errorMsg: x => 'Value must not be nil',
  prereqs: [],
}

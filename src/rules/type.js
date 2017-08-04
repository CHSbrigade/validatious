const { is, isNil } = require('ramda')

/**
 * @description Check the type of a given variable.
 */
module.exports = type => ({
  name: 'type',
  evaluator: x => isNil(x) || is(type, x),
  errorMsg: x => `Expected '${x}' to be of type: '${type.name}'`,
  prereqs: [],
})

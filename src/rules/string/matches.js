const { isNil } = require('ramda')
const { type } = require('..')

/**
 * @description Return true if data matches the given value.
 */
module.exports = matcher => ({
  name: 'string/matches',
  evaluator: x => isNil(x) || !isNil(x.match(matcher)),
  errorMsg: x => `Expected '${x}' to match '${matcher}'`,
  prereqs: [type(String)],
})

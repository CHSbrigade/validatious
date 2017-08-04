const { isNil } = require('ramda')
const { type } = require('..')

/**
 * @description Return true if data matches email format. There are various
 * patterns we could check for, but we're going to keep things simple and simply
 * check for the precense of '@' followed by a '.'
 */
module.exports = {
  name: 'string/matchesEmail',
  evaluator: x => isNil(x) || !isNil(x.match(/.+@.+\..+/i)),
  errorMsg: x => `'${x}' does not look like a valid email format`,
  prereqs: [type(String)],
}

/**
 * @description This rule always passes - probably useful only for testing
 */
module.exports = {
  name: 'tautology',
  evaluator: x => true,
  errorMsg: x => 'This error should never happen',
  prereqs: [],
}

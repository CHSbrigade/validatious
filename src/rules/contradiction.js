/**
 * @description This rule always fails - probably useful only for testing
 */
module.exports = {
  name: 'contradiction',
  evaluator: x => false,
  errorMsg: x => 'This error should always happen',
  prereqs: [],
}

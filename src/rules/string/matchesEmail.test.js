const { matchesEmail } = require('.')
const { runRule } = require('../..')
const { ruleIsValid } = require('../../utils')

test('it is a valid rule', () => {
  expect(ruleIsValid(matchesEmail)).toBe(true)
})

test('it passes if email format', () => {
  const result = runRule(matchesEmail, { data: 'foo@example.com' })
  expect(result).toBe(null)
})

test('it passes if undefined', () => {
  const result = runRule(matchesEmail, { data: undefined })
  expect(result).toBe(null)
})

test('it fails if not email format', () => {
  const result = runRule(matchesEmail, { data: 'username' })

  expect(result).toBeTruthy()
  expect(result.ruleName).toBe('string/matchesEmail')
  expect(result.key).toBe('data')
  expect(result.errorMsg).toBe(
    "'username' does not look like a valid email format"
  )
})

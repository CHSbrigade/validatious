const { matchesExactly } = require('.')
const { runRule } = require('../..')
const { ruleIsValid } = require('../../utils')

const matchesExactlyFoo = matchesExactly('foo')

test('it is a valid rule', () => {
  expect(ruleIsValid(matchesExactlyFoo)).toBe(true)
})

test('it passes if data matches exactly', () => {
  const result = runRule(matchesExactlyFoo, { data: 'foo' })
  expect(result).toBe(null)
})

test('it passes if data is undefined', () => {
  const result = runRule(matchesExactlyFoo, { data: undefined })
  expect(result).toBe(null)
})

test('it fails if data contains matcher but not exact', () => {
  const result = runRule(matchesExactlyFoo, { data: 'foobaz' })

  expect(result).toBeTruthy()
  expect(result.ruleName).toBe('string/matchesExactly')
  expect(result.key).toBe('data')
  expect(result.errorMsg).toBe("Expected 'foobaz' to exactly match 'foo'")
})

test('it fails if data does not match', () => {
  const result = runRule(matchesExactlyFoo, { data: 'baz' })

  expect(result).toBeTruthy()
  expect(result.ruleName).toBe('string/matchesExactly')
  expect(result.key).toBe('data')
  expect(result.errorMsg).toBe("Expected 'baz' to exactly match 'foo'")
})

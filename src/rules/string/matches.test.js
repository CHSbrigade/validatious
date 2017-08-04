const { matches } = require('.')
const { runRule } = require('../..')
const { ruleIsValid } = require('../../utils')

const matchesFoo = matches(/foo/)

test('it is a valid rule', () => {
  expect(ruleIsValid(matchesFoo)).toBe(true)
})

test('it passes if data contains matcher', () => {
  const result = runRule(matchesFoo, { data: 'foobaz' })
  expect(result).toBe(null)
})

test('it passes if data is exactly matcher', () => {
  const result = runRule(matchesFoo, { data: 'foo' })
  expect(result).toBe(null)
})

test('it passes if data is undefined', () => {
  const result = runRule(matchesFoo, { data: undefined })
  expect(result).toBe(null)
})

test('it fails if data does not contain matcher', () => {
  const result = runRule(matchesFoo, { data: 'baz' })

  expect(result).toBeTruthy()
  expect(result.ruleName).toBe('string/matches')
  expect(result.key).toBe('data')
  expect(result.errorMsg).toBe("Expected 'baz' to match '/foo/'")
})

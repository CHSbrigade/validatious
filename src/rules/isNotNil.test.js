const { isNotNil } = require('.')
const { runRule } = require('..')
const { ruleIsValid } = require('../utils')

test('it is a valid rule', () => {
  expect(ruleIsValid(isNotNil)).toBe(true)
})

test('it passes when value is not nil', () => {
  const result = runRule(isNotNil, { data: 3.17 })
  expect(result).toBe(null)
})

test('it fails when value is nil', () => {
  const result = runRule(isNotNil, { data: undefined })

  expect(result).toBeTruthy()
  expect(result.ruleName).toEqual('isNotNil')
  expect(result.key).toEqual('data')
  expect(result.errorMsg).toEqual('Value must not be nil')
})

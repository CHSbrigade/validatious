const { min } = require('.')
const { runRule } = require('../..')
const { ruleIsValid } = require('../../utils')

const minOfSeven = min(7)

test('it is a valid rule', () => {
  expect(ruleIsValid(minOfSeven)).toBe(true)
})

test('it passes if value is greater than min', () => {
  const result = runRule(minOfSeven, { data: 7.1 })
  expect(result).toBe(null)
})

test('it passes if value is equal to min', () => {
  const result = runRule(minOfSeven, { data: 7 })
  expect(result).toBe(null)
})

test('it passes if value is undefined', () => {
  const result = runRule(minOfSeven, { data: undefined })
  expect(result).toBe(null)
})

test('it fails if value is less than min', () => {
  const result = runRule(minOfSeven, { data: 6 })

  expect(result).toBeTruthy()
  expect(result.ruleName).toEqual('number/min')
  expect(result.key).toEqual('data')
  expect(result.errorMsg).toEqual(
    "Expected '6' to be greater than or equal to '7'"
  )
})

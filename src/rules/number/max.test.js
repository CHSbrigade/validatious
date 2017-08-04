const { max } = require('.')
const { runRule } = require('../..')
const { ruleIsValid } = require('../../utils')

const maxOfSeven = max(7)

test('it is a valid rule', () => {
  expect(ruleIsValid(maxOfSeven)).toBe(true)
})

test('it passes if value is less than max', () => {
  const result = runRule(maxOfSeven, { data: 6.9 })
  expect(result).toBe(null)
})

test('it passes if value is equal to max', () => {
  const result = runRule(maxOfSeven, { data: 7 })
  expect(result).toBe(null)
})

test('it passes if value is undefined', () => {
  const result = runRule(maxOfSeven, { data: undefined })
  expect(result).toBe(null)
})

test('it fails if value is greater than max', () => {
  const result = runRule(maxOfSeven, { data: 8 })

  expect(result).toBeTruthy()
  expect(result.ruleName).toEqual('number/max')
  expect(result.key).toEqual('data')
  expect(result.errorMsg).toEqual(
    "Expected '8' to be less than or equal to '7'"
  )
})

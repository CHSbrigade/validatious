const { minLength } = require('.')
const { runRule } = require('../..')
const { ruleIsValid } = require('../../utils')

const minLengthOfFour = minLength(4)

test('it is a valid rule', () => {
  expect(ruleIsValid(minLengthOfFour)).toBe(true)
})

test('it passes if length is greater than min', () => {
  const result = runRule(minLengthOfFour, { data: '12345' })
  expect(result).toBe(null)
})

test('it passes if length is equal to min', () => {
  const result = runRule(minLengthOfFour, { data: '1234' })
  expect(result).toBe(null)
})

test('it passes if undefined', () => {
  const result = runRule(minLengthOfFour, { data: undefined })
  expect(result).toBe(null)
})

test('it fails if length is less than min', () => {
  const result = runRule(minLengthOfFour, { data: '123' })

  expect(result).toBeTruthy()
  expect(result.key).toEqual('data')
  expect(result.ruleName).toEqual('string/minLength')
  expect(result.errorMsg).toEqual(
    "Expected '123' to be at least 4 characters in length"
  )
})

const { maxLength } = require('.')
const { runRule } = require('../..')
const { ruleIsValid } = require('../../utils')

const maxLengthOfSix = maxLength(6)

test('it is a valid rule', () => {
  expect(ruleIsValid(maxLengthOfSix)).toBe(true)
})

test('it passes if length is less than max', () => {
  const result = runRule(maxLengthOfSix, { data: '12345' })

  expect(result).toBe(null)
})

test('it passes if length is equal to max', () => {
  const result = runRule(maxLengthOfSix, { data: '123456' })

  expect(result).toBe(null)
})

test('it passes if undefined', () => {
  const result = runRule(maxLengthOfSix, { data: undefined })

  expect(result).toBe(null)
})

test('it fails if length is greater than max', () => {
  const result = runRule(maxLengthOfSix, { data: '1234567' })

  expect(result).toBeTruthy()
  expect(result.key).toEqual('data')
  expect(result.ruleName).toEqual('maxLength')
  expect(result.errorMsg).toEqual(
    "Expected '1234567' to be no greater than 6 characters in length"
  )
})

const { type } = require('.')
const { runRule } = require('..')
const { ruleIsValid } = require('../utils')

const isString = type(String)

test('it is a valid rule', () => {
  expect(ruleIsValid(isString)).toBe(true)
})

test('it passes if type matches', () => {
  const result = runRule(isString, { data: 'a string' })
  expect(result).toBe(null)
})

test('it passes if value is undefined', () => {
  const result = runRule(isString, { data: undefined })
  expect(result).toBe(null)
})

test('it fails if type does not match', () => {
  const result = runRule(isString, { data: 42 })

  expect(result).toBeTruthy()
  expect(result.key).toEqual('data')
  expect(result.ruleName).toEqual('type')
  expect(result.errorMsg).toEqual("Expected '42' to be of type: 'String'")
})

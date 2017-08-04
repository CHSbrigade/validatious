const { contradiction } = require('.')
const { runRule } = require('..')
const { ruleIsValid } = require('../utils')

test('it is a valid rule', () => {
  expect(ruleIsValid(contradiction)).toBe(true)
})

test('it fails with all kinds of data', () => {
  expect(runRule(contradiction, { data: 1 })).toBeTruthy()
  expect(runRule(contradiction, { data: 'a string' })).toBeTruthy()
  expect(runRule(contradiction, { data: true })).toBeTruthy()
  expect(runRule(contradiction, { data: null })).toBeTruthy()
})

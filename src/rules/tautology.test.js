const { tautology } = require('.')
const { runRule } = require('..')
const { ruleIsValid } = require('../utils')

test('it is a valid rule', () => {
  expect(ruleIsValid(tautology)).toBe(true)
})

test('it passes with all kinds of data', () => {
  expect(runRule(tautology, { data: 1 })).toBe(null)
  expect(runRule(tautology, { data: 'a string' })).toBe(null)
  expect(runRule(tautology, { data: false })).toBe(null)
  expect(runRule(tautology, { data: null })).toBe(null)
})

const { merge, omit } = require('ramda')
const ruleIsValid = require('./ruleIsValid')

const createRule = (overrides = {}) =>
  merge(
    {
      name: 'ruleName',
      evaluator: () => true,
      errorMsg: () => 'Simple message.',
      prereqs: [],
    },
    overrides
  )

test('it is false if rule is not object', () => {
  expect(ruleIsValid('foo')).toBe(false)
})

test('it is false if missing name', () => {
  const rule = omit('name', createRule())
  expect(ruleIsValid(rule)).toBe(false)
})

test('it is false if missing evaluator', () => {
  const rule = omit('evaluator', createRule())
  expect(ruleIsValid(rule)).toBe(false)
})

test('it is false if missing errorMsg', () => {
  const rule = omit('errorMsg', createRule())
  expect(ruleIsValid(rule)).toBe(false)
})

test('it is false if errorMsg not function', () => {
  const rule = createRule({ errorMsg: 'Just a string.' })
  expect(ruleIsValid(rule)).toBe(false)
})

test('it is false if prereqs not array', () => {
  const rule = createRule({ prereqs: 'foo' })
  expect(ruleIsValid(rule)).toBe(false)
})

test('it is true with empty prereqs', () => {
  const rule = createRule({ prereqs: [] })
  expect(ruleIsValid(rule)).toBe(true)
})

test('it is true with valid input', () => {
  const rule = createRule()
  expect(ruleIsValid(rule)).toBe(true)
})

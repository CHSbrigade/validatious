const runRules = require('./runRules')

const generateRule = (ruleName, evalResult = true) => ({
  name: ruleName,
  evaluator: () => evalResult,
  errorMsg: () => 'Simple error msg.',
  prereqs: [],
})

test('it throws if rules not array', () => {
  const runWithNotArray = () => runRules('notArray', { x: 'x' })

  expect(runWithNotArray).toThrow('Rules should be an Array')
})

test('it returns null if given an empty array', () => {
  expect(runRules([], { x: 'x' })).toBe(null)
})

test('it returns null if all checks pass', () => {
  const rules = [generateRule('firstRule'), generateRule('secondRule')]

  expect(runRules(rules, { x: 'x' })).toBe(null)
})

test('it returns first error', () => {
  const rules = [
    generateRule('firstRule', false),
    generateRule('secondRule', false),
  ]
  const result = runRules(rules, { x: 'x' })

  expect(result.ruleName).toBe('firstRule')
})

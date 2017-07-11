const { merge } = require('ramda')
const runRule = require('./runRule')

describe('runRule', () => {
  describe('argument validadtions', () => {
    test('it throws if rule is invalid', () => {})
  })
  describe('return', () => {
    const validData = { a: 'a' }
    const validRule = {
      name: 'testRule',
      evaluator: () => false,
      errorMsg: () => 'Simple error message.',
    }
    describe('evaluator passes', () => {
      const passingRule = merge(validRule, { evaluator: () => true })
      test('it returns null', () => {
        expect(runRule(passingRule, validData)).toBe(null)
      })
    })
    describe('rule fails', () => {
      const result = runRule(validRule, validData)
      test('it should define key', () => {
        expect(result.key).toEqual(validData.key)
      })
      test('it should define ruleName', () => {
        expect(result.ruleName).toEqual(validRule.name)
      })
      test('it should define errorMsg', () => {
        expect(result.errorMsg).toEqual(validRule.errorMsg())
      })
    })
  })
})

const { merge } = require('ramda')
const runRule = require('./runRule')

const validData = { a: 'a' }

const validRule = {
  name: 'testRule',
  evaluator: () => false,
  errorMsg: () => 'Simple error message.',
  prereqs: [],
}

describe('runRule', () => {
  describe('argument validadtions', () => {
    test('it throws if rule is invalid', () => {
      const invalidRule = {}
      const runWithMock = () => runRule(invalidRule, validData)

      expect(runWithMock).toThrow(/Invalid rule/)
    })

    test('it throws if data is invalid', () => {
      const invalidData = {}
      const runWithMock = () => runRule(validRule, invalidData)

      expect(runWithMock).toThrow(/Invalid data/)
    })
  })
  describe('return', () => {
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

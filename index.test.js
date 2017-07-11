const { is, isEmpty, merge } = require('ramda')
const { defineRule, runRule } = require('./index')

describe('defineRule', () => {
  describe('argument checks', () => {
    test('it throws unless evaluator is function', () => {
      const badCall = () => defineRule('foo', 'valid errorMsg')
      expect(badCall).toThrow('evaluator: expected a Function')
    })

    test('it throws unless errorMsg is string', () => {
      const badCall = () => defineRule(x => true, {})
      expect(badCall).toThrow('errorMsg: expected a String')
    })

    test('it throws unless prereqs is an array', () => {
      const badCall = () => defineRule(x => true, 'foo', 'invalid')
      expect(badCall).toThrow('prereqs: expected an (optional) Array')
    })
  })

  describe('shape of return value', () => {
    const result = defineRule(x => true, 'Error message with special _x_.')

    describe('evaluator', () => {
      test('it is defined', () => {
        expect(result.evaluator).toBeDefined()
      })

      test('it is a function', () => {
        const isFunc = is(Function, result.evaluator)
        expect(isFunc).toBe(true)
      })
    })

    describe('errorMsg', () => {
      test('it is defined', () => {
        expect(result.errorMsg).toBeDefined()
      })

      test('it is a function', () => {
        const isFunc = is(Function, result.errorMsg)
        expect(isFunc).toBe(true)
      })

      test('it replaces _x_ with input', () => {
        const evalStr = result.errorMsg('foo')
        expect(evalStr).toEqual('Error message with special foo.')
      })
    })

    describe('prereqs', () => {
      test('it is defined', () => {
        expect(result.prereqs).toBeDefined()
      })

      test('it is an array', () => {
        const isArray = is(Array, result.prereqs)
        expect(isArray).toBe(true)
      })

      test('it defaults to an empty array', () => {
        expect(isEmpty(result.prereqs)).toBe(true)
      })
    })
  })
})

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

const mapRule = require('./mapRule')

const fooRule = {
  name: 'Foo Rule',
  evaluator: x => x === 'foo',
  errorMsg: x => `Expected '${x}' to be equal to 'foo'`,
  prereqs: [],
}

test('it returns null if all pass', () => {
  const passingData = { data: ['foo', 'foo', 'foo', 'foo'] }
  const result = mapRule(fooRule)(passingData)

  expect(result).toBe(null)
})

test('it returns first error', () => {
  const failingData = { data: ['foo', 'baz', 'foo', 'buzz'] }
  const result = mapRule(fooRule)(failingData)
  const expectedError = {
    key: 'data',
    ruleName: fooRule.name,
    errorMsg: fooRule.errorMsg('baz'),
  }

  expect(result).toEqual(expectedError)
})

test('it handles single-item', () => {
  const singleItemData = { data: 'foo' }
  const result = mapRule(fooRule)(singleItemData)

  expect(result).toBe(null)
})

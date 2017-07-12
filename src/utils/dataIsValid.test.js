const dataIsValid = require('./dataIsValid')

test('it should be false if data is not object', () => {
  expect(dataIsValid('foo')).toBe(false)
})

test('it should be false if empty object', () => {
  expect(dataIsValid({})).toBe(false)
})

test('it should be false if more than one key', () => {
  expect(dataIsValid({ one: 1, two: 2 })).toBe(false)
})

test('it should be true if one key and one value', () => {
  expect(dataIsValid({ one: 1 })).toBe(true)
})

import { generate } from './generate.js'

test('test', () => {
  const expected = generate("bacterious");
  expect(expected).not.toBeNull();
})

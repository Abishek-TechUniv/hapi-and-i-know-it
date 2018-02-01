const supertest = require('supertest');
const { prefix } = require('./route');

test('handler function should return Hello followed by name', () => {
  expect(prefix('Abishek')).toBe('Hello Abishek');
});


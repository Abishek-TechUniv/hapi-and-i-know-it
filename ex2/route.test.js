const supertest = require('supertest');
const { prefix, server } = require('./route');

test('handler function should return Hello followed by name', () => {
  expect(prefix('Abishek')).toBe('Hello Abishek');
});

test('server to respond with result of sayHello function', (done) => {
  supertest(server.listener).get('/abishek').then((response) => {
    expect(response.text).toBe('Hello abishek');
    done();
  });
});

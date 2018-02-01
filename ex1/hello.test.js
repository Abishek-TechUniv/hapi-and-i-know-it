const { server, sayHello } = require('./hello');
const supertest = require('supertest');

test('handler function should return string', () => {
  global.console = { log: jest.fn() };
  sayHello(null, console.log);
  expect(console.log).toHaveBeenCalledWith('Hello hapi');
});

test('server to respond with result of sayHello function', (done) => {
  supertest(server.listener).get('/').then((response) => {
    expect(response.text).toBe('Hello hapi');
    done();
  });
});

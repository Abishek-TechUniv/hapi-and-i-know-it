const axios = require('axios');
const { server, sayHello } = require('./hello');

test('handler function should return string', () => {
  expect(sayHello()).toMatch('Hello hapi');
});

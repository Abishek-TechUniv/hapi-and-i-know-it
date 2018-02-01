const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080,
});

const sayHello = (request, reply) => reply('Hello hapi');

server.route({ path: '/', method: 'GET', handler: sayHello });

// server.start();

module.exports = { sayHello, server };

const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});

server.route({
  method: 'POST',
  path: '/login',
  handler: (request, reply) => reply('login successful'),
});

if (!module.parent) {
  server.start();
}

module.exports = server;

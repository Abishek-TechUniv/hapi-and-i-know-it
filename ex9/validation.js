const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8097,
});

server.route({
  method: 'GET',
  path: '/chickens/{breed}',
  handler: (request, reply) => {
    reply(`You asked for : ${request.params.breed}`);
  },

});

if (!module.parent) {
  server.start();
}

module.exports = server;

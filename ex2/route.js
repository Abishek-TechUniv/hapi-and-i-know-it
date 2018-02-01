const prefix = name => `Hello ${name}`;

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: (Number(process.argv[2]) || 8081),
});

server.route({
  path: '/{name}',
  method: 'GET',
  handler: (request, repsonse) => repsonse(prefix(request.params.name)),
});

// server.start();

module.exports = { prefix, server };

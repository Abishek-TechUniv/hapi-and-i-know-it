const Hapi = require('hapi');
const fs = require('fs');
const transform = require('rot13-transform');
const Path = require('path');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: (Number(process.argv[2]) || 8082),
});

const cipher = (request, reply) => {
  const file = fs.createReadStream(Path.join(__dirname, 'secret.txt'));
  reply(file.pipe(transform()));
};

server.route({ path: '/', method: 'GET', handler: cipher });

// server.start();

module.exports = { cipher, server };

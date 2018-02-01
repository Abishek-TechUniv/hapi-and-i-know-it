const Hapi = require('hapi');
const Vision = require('vision');
const Path = require('path');

const server = new Hapi.Server();

server.register(Vision, (err) => {
  if (err) throw err;
});

server.connection({
  host: 'localhost',
  port: (Number(process.argv[2]) || 8080),
});

server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: 'index.html',
  },
});

server.views({
  engines: {
    html: require('handlebars'), //eslint-disable-line
  },
  path: Path.join(__dirname, 'templates'),
});

// server.start();

module.exports = server;

const HandleBar = require('handlebars');
const Vision = require('vision');
const Path = require('path');
const Hapi = require('hapi');

const server = new Hapi.Server();

server.register(Vision, (err) => {
  if (err) throw err;
});

server.connection({
  host: 'localhost',
  port: (Number(process.argv[2]) || 8081),
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
    html: HandleBar,
  },
  helpersPath: 'ex7/helpers',
  path: Path.join(__dirname, 'templates'),
});

server.start();

module.exports = server;

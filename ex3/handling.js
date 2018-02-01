const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server();

server.register(Inert, (err) => {
  if (err) throw err;
});

server.connection({
  host: 'localhost',
  port: (Number(process.argv[2]) || 8080),
});


server.route({ path: '/', method: 'GET', handler: { file: 'ex3/index.html' } });

// server.start();

module.exports = server;

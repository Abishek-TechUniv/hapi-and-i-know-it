const Hapi = require('hapi');

// const server = new Hapi.Server({
//   host: 'localhost',
//   port: Number(process.argv[2] || 8080),
// });

// server.route({ path: '/', method: 'GET', handler: sayHello });

const sayHello = () => 'Hello hapi';

module.exports = { sayHello };

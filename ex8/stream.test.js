const { cipher, server } = require('./stream');
const supertest = require('supertest');

// test('should return ciphered output to file', (done) => {
//   const call = (data) => {
//     expect(data.then()).toMatch('Gur Chefhvg bs Uncv-arff');
//     done();
//   };
//   cipher(null, call);
// });

test('server should return the success code', (done) => {
  supertest(server.listener).get('/')
    .then((response) => {
      expect(response.status).toBe(200);
      done();
    });
});

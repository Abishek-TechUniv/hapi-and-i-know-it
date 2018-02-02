const supertest = require('supertest');
const server = require('./validation');

test('server should return the success code', (done) => {
  supertest(server.listener).get('/chickens/breed')
    .then((response) => {
      expect(response.status).toBe(200);
      done();
    });
});

test('should return the correct text if validated', () => {
  supertest(server.listener).get('/chickens/cake')
    .then((response) => {
      expect(response.text).toMatch('You asked for : cake');
    });
});

test('should return error if not validated', () => {
  supertest(server.listener).get('/chickens/')
    .then((response) => {
      expect(response.status).toBe(404);
    });
});

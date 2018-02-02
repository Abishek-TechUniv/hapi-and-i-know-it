const supertest = require('supertest');
const server = require('./joi_validation');

describe('Posting to login URL', () => {
  it('should return success code if valid data given', (done) => {
    supertest(server.listener)
      .post('/login')
      .send({ isGuest: false, username: 'Abishek', accessToken: 'abc123' })
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });

  it('should return failure if invalid (no isLogin) data given', (done) => {
    supertest(server.listener)
      .post('/login')
      .send({ username: 'Abishek', accessToken: 'abc123' })
      .then((response) => {
        expect(response.status).toBe(400);
        done();
      });
  });
});

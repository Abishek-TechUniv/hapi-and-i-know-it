const supertest = require('supertest');
const server = require('./helping');

const html =
`<html>
    <head><title>Hello Helping!</title></head>
    <body>
        Hello Helping!
    </body>
</html>`;

test('should send a succes response code', () => {
  supertest(server.listener).get('/?name=Helping&suffix=1')
    .then((repsonse) => {
      expect(repsonse.code).toBe(200);
    });
});

test('server should return the text', (done) => {
  supertest(server.listener).get('/?name=Helping&suffix=!')
    .then((response) => {
      expect(response.text).toMatch(html);
      done();
    });
});

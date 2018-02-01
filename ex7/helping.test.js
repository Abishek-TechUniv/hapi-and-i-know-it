const supertest = require('supertest');
const server = require('./helping');

const html =
`<html>
    <head><title>Hello Helping!</title></head>
    <body>
        Hello Helping!
    </body>
</html>
`;

test('server should return the succes code', (done) => {
  supertest(server.listener).get('/?name=Helping&suffix=!')
    .then((response) => {
      expect(response.status).toBe(200);
      done();
    });
});

test('server should return the text', (done) => {
  supertest(server.listener).get('/?name=Helping&suffix=!')
    .then((response) => {
      expect(response.text).toMatch(html);
      done();
    });
});

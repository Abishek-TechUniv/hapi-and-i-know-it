const supertest = require('supertest');
const server = require('./handling');

const html = `<html>
<head><title>Hello Handling</title></head>
<body>
    Hello Handling
</body>
</html>`;

test('server should return the text', (done) => {
  supertest(server.listener).get('/')
    .then((response) => {
      expect(response.text).toMatch(html);
      done();
    });
});

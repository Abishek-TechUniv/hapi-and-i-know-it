const supertest = require('supertest');
const server = require('./views');

const html =
`<html>
    <head><title>Hello Word</title></head>
    <body>
        Hello Word
    </body>
</html>`;

test('server should return the text', (done) => {
  supertest(server.listener).get('/?name=Word')
    .then((response) => {
      expect(response.text).toMatch(html);
      done();
    });
});

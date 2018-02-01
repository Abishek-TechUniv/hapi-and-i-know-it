const supertest = require('supertest');
const server = require('./directories');

const html =
`<html>
    <head><title>Hello Directories</title></head>
    <body>
        Hello Directories
    </body>
</html>
`;

test('server should return the text', (done) => {
  supertest(server.listener).get('/foo/bar/baz/file.html')
    .then((response) => {
      expect(response.text).toMatch(html);
      done();
    });
});

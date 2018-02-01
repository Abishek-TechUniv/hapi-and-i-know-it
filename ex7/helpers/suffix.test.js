const suffixer = require('./suffix');

test('should return concatenation of two strings', () => {
  const context = {
    data: {
      root: {
        query: {
          name: 'Hello ',
          suffix: 'World',
        },
      },
    },
  };
  expect(suffixer(context)).toMatch('Hello World');
});

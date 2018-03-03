const request = require('supertest');
const app = require('../server/app');

describe('Server Testing: Test the root path', () => {
  test('It should response the GET method', () =>
    request(app).get('/').expect(200));

  test('It should 404 everything else', () =>
    request(app).get('/test/2/test').expect(404));
});

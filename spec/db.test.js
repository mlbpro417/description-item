const db = require('../db/database');

describe('Database testing', () => {
  test('insert should be a function', () => {
    expect(typeof db.insert).toBe('function');
  });

  test('findOneProduct should be a function', () => {
    expect(typeof db.findOneProduct).toBe('function');
  });
});

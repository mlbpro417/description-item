const seedDataTest = require('../data/seedDataGenerator');

describe('Seed Data Generator Function Testing', () => {

  test('randomElement should be a function', () => {
    expect(typeof seedDataTest.a).toBe('function');
  });

  test('randomElement should be a function', () => {
    expect(typeof seedDataTest.b).toBe('function');
  });

  test('randomElement should be a function', () => {
    expect(typeof seedDataTest.c).toBe('function');
  });

  test('randomElement should be a function', () => {
    expect(typeof seedDataTest.d).toBe('function');
  });

  test('randomElement should be a function', () => {
    expect(typeof seedDataTest.e).toBe('function');
  });

});

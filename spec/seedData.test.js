const seedDataTest = require('../data/seedDataGenerator');

describe('Seed Data Generator Function Testing', () => {
  test('randomElement should be a function', () => {
    expect(typeof seedDataTest.randoEl).toBe('function');
  });

  test('getRandomInt should be a function', () => {
    expect(typeof seedDataTest.randoInt).toBe('function');
  });

  test('getOneRandomInt should be a function', () => {
    expect(typeof seedDataTest.oneRandoInt).toBe('function');
  });

  test('randomDescription should be a function', () => {
    expect(typeof seedDataTest.randoDes).toBe('function');
  });

  test('mapping should be a function', () => {
    expect(typeof seedDataTest.mappingFunc).toBe('function');
  });
  test('mapping should return an array', () => {
    expect(Array.isArray(seedDataTest.mapp)).toBe(true);
  });
  test('mapping should return an array of 300 objects', () => {
    expect(seedDataTest.mapp.length).toBe(300);
  });
});

// const seedDataTest = require('../data/seedDataGenerator');
const {
  randoEl,
  randoInt,
  oneRandoInt,
  randoDes,
  mappingFunc,
  mapp,
} = require('../data/seedDataGenerator');


describe('Seed Data Generator Function Testing', () => {
  test('randomElement should be a function', () => {
    expect(typeof randoEl).toBe('function');
  });

  test('getRandomInt should be a function', () => {
    expect(typeof randoInt).toBe('function');
  });
  test('getRandomInt should return a number', () => {
    expect(typeof randoInt()).toBe('number');
  });

  test('getOneRandomInt should be a function', () => {
    expect(typeof oneRandoInt).toBe('function');
  });
  test('getOneRandomInt should return a number', () => {
    expect(typeof oneRandoInt()).toBe('number');
  });

  test('randomDescription should be a function', () => {
    expect(typeof randoDes).toBe('function');
  });
  test('randomDescription should return an array', () => {
    expect(randoDes()).toBeInstanceOf(Array);
  });

  test('mapping should be a function', () => {
    expect(typeof mappingFunc).toBe('function');
  });
  test('mapping should return an array', () => {
    expect(mapp).toBeInstanceOf(Array);
  });
  test('mapping should return an array of 300 objects', () => {
    expect(mapp.length).toBe(300);
  });
});

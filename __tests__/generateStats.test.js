const generateStats = require('../utils/generateStats').generateStats;

describe('[generateStats] helper function', () => {
  let value;

  beforeEach(() => {
    value = generateStats('player');
  });

  afterEach(() => {
    value = null;
  });

  it('should return a non-empty object', () => {
    expect(typeof value).toBe('object');
  });

  it('should generate the correct values for [health]', () => {
    expect(value.health).toBeGreaterThan(69);
    expect(value.health).toBeLessThan(101);
  });

  it('should generate the correct values for [strength]', () => {
    expect(value.strength).toBeGreaterThan(69);
    expect(value.strength).toBeLessThan(81);
  });

  it('should generate the correct values for [defence]', () => {
    expect(value.defence).toBeGreaterThan(44);
    expect(value.defence).toBeLessThan(56);
  });

  it('should generate the correct values for [speed]', () => {
    expect(value.speed).toBeGreaterThan(39);
    expect(value.speed).toBeLessThan(51);
  });

  it('should generate the correct values for [luck]', () => {
    expect(value.luck).toBeGreaterThan(9);
    expect(value.luck).toBeLessThan(31);
  });
});

describe('[generateStats] custom variant', () => {
  const customValue = generateStats('custom', {
    rage: [1, 100],
    mana: [1, 200],
    energy: [10, 100]
  });

  it('should return an object with custom properties', () => {
    expect(typeof customValue).toBe('object');
    expect(customValue.rage).toBeDefined();
    expect(customValue.mana).toBeDefined();
    expect(customValue.energy).toBeDefined();
  });

  it('should contain the correct values for custom properties', () => {
    expect(customValue.rage).toBeGreaterThan(0);
    expect(customValue.rage).toBeLessThan(101);

    expect(customValue.mana).toBeGreaterThan(0);
    expect(customValue.mana).toBeLessThan(201);

    expect(customValue.energy).toBeGreaterThan(9);
    expect(customValue.energy).toBeLessThan(101);
  });
});

describe('[generateStats] with unknown unit type', () => {
  const errorValue = generateStats('orc');
  expect(typeof errorValue).toBe('object');
  expect(errorValue.message).toBe('Unit \"orc\" does not exist');
});
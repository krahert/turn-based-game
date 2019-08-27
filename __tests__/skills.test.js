const hasCriticalStrike = require('../skills/').hasCriticalStrike;
const hasResilience = require('../skills/').hasResilience;

describe('[hasCriticalStrike] skill', () => {
  const critValue = hasCriticalStrike({});

  it('should return an object', () => {
    expect(typeof critValue).toBe('object');
  });

  it('should contain the method [criticalStrike]', () => {
    expect(critValue.criticalStrike).toBeDefined();
    expect(typeof critValue.criticalStrike).toBe('function');
  });
});

describe('[hasResilience]', () => {
  const resValue = hasResilience({});

  it('should return an object', () => {
    expect(typeof resValue).toBe('object');
  });

  it('should contain the method [resilience]', () => {
    expect(resValue.resilience).toBeDefined();
    expect(typeof resValue.resilience).toBe('function');
  });
});
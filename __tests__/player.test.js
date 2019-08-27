const Player = require('../units/player');

describe('[player] factory function', () => {
  let player;

  beforeEach(() => {
    player = Player();
  });

  afterEach(() => {
    player = null;
  });

  it('should return an object', () => {
    expect(typeof player).toBe('object');
  });

  it('should return a non-empty object', () => {
    expect(player.name).toBeDefined();
  });

  it('should contain the predefined properties: [health], [strength], [defence], [speed], [luck], [usesSkills], [canUseResilience]', () => {
    expect(player.name).toBeDefined();
    expect(player.strength).toBeDefined();
    expect(player.defence).toBeDefined();
    expect(player.speed).toBeDefined();
    expect(player.luck).toBeDefined();
    expect(player.usesSkills).toBeDefined();
    expect(player.canUseResilience).toBeDefined();
  });

  it('should contain the methods: [conclusion], [attack], [defend]', () => {
    expect(typeof player.conclusion).toBe('function');
    expect(typeof player.attack).toBe('function');
    expect(typeof player.defend).toBe('function');
  });
});


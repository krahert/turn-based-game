const player = require('../units/player')();
const villain = require('../units/villain')();

describe('[combat] simulation', () => {
  it.skip('should reflect [player] attacking [villain]', () => {
    const villainInitialHealth = villain.health;
    console.log(villain.health);
    player.attack(villain);
    // if (villainInitialHealth < villain.health) {
    //   expect(villainInitialHealth).toBeLessThan(villain.health);
    // } else {
    //   while (villainInitialHealth === villain.health) {
    //     player.attack(villain);
    //   }
    //   expect(villainInitialHealth).toBeLessThan(villain.health);
    // }

    expect(villainInitialHealth).toBeLessThan(villain.health);
  });

  it
});
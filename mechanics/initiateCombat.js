const colors = require('colors');

const initiateCombat = (player, villain) => {
  let maxNumberOfTurns = 20;

  if (player.speed > villain.speed
    || (player.speed === villain.speed && player.luck > villain.luck)) {

    console.log(`[${player.name}]`.blue, `attacks first.`, `[speed:${player.speed} / luck:${player.luck}]`.blue, `vs`, `[speed:${villain.speed} / luck:${villain.luck}]`.red);

    while (maxNumberOfTurns > 0) {
      maxNumberOfTurns % 2 ? villain.attack(player) : player.attack(villain);
      maxNumberOfTurns--;
    }
    console.log(`The ${player.name} has ran out of time...`.red);
    villain.conclusion(player);

  } else if (player.speed < villain.speed
    || (player.speed === villain.speed && player.luck < villain.luck)) {

    console.log(`[${villain.name}]`.red, `attacks first.`, `[speed:${villain.speed} / luck:${villain.luck}]`.red, `vs`, `[speed:${player.speed} / luck:${player.luck}]`.blue);

    while (maxNumberOfTurns > 0) {
      maxNumberOfTurns % 2 ? player.attack(villain) : villain.attack(player);
      maxNumberOfTurns--;
    }
    console.log(`The ${player.name} has ran out of time...`.red);
    villain.conclusion(player);
  }
};

module.exports = { initiateCombat };
const initiativeCalculator = (player, villain) => {
  let maxNumberOfTurns = 20;
  if (player.speed > villain.speed
    || (player.speed === villain.speed && player.luck > villain.luck)) {

    console.log(`[${player.name}] attacks first. [speed:${player.speed} / luck:${player.luck}] vs [speed:${villain.speed} / luck:${villain.luck}]`);
    // playerHasInitiative(player, villain, 20);
    while (maxNumberOfTurns > 0) {
      console.log(player.health, villain.health);
      if (player.health <= 0) {
        villain.conclusion(player);
      }

      if (villain.health <= 0) {
        player.conclusion(villain);
      }

      maxNumberOfTurns % 2 ? villain.attack(player) : player.attack(villain);
      maxNumberOfTurns--;
    }
    console.log(`The ${player.name} ran out of time...`);
    villain.conclusion(player);
  } else if (player.speed < villain.speed
    || (player.speed === villain.speed && player.luck < villain.luck)) {

    console.log(`[${villain.name}] attacks first. [speed:${villain.speed} / luck:${villain.luck}] vs [speed:${player.speed} / luck:${player.luck}]`);
    while (player.health > 0 && villain.health > 0 && maxNumberOfTurns > 0) {
      villain.attack(player);
      player.attack(villain);
      maxNumberOfTurns--;
    }
  }
};

// const playerHasInitiative = (player, villain, turns) => {
//   if (player.health <= 0) {
//     villain.conclusion(player);
//   }
//   if (turns < 1) {
//     console.log(`The ${player.name} ran out of time...`);
//     villain.conclusion(player);
//   }
//   if (villain.health <= 0) {
//     player.conclusion(villain);
//   }
//   turns % 2 ? player.attack(villain) : villain.attack(player);
//   console.log(player.health, villain.health);
//   playerHasInitiative(player, villain, turns--);
// };

module.exports = { initiativeCalculator };
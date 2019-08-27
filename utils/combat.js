const colors = require('colors');

const canAttack = (unitState) => ({
  attack: (targetState) => {
    const attackMissed = Math.floor(Math.random() * 100) < targetState.luck;
    if (!attackMissed) {
      targetState.defend(unitState);
    } else {
      console.log(`[${unitState.name}]'s attack missed.`.bgWhite.gray);
      return;
    }
  }
});

const canDefend = (unitState) => ({
  defend: (targetState, skill) => {
    if (!skill) {
      const damageDone = targetState.strength - unitState.defence;
      if (damageDone > 0) {
        unitState.health = unitState.health - damageDone;
        console.log(`[${unitState.name}] has taken ${damageDone} damage. [${unitState.name}: ${unitState.health} hp]`);
        if (unitState.health <= 0) {
          targetState.conclusion(unitState);
        } else {
          return;
        }
      }
    } else if (skill === 'resilience') {
      const damageDone = Math.floor((unitState.strength - targetState.defence) / 2);
      if (damageDone > 0) {
        targetState.health = targetState.health - damageDone;
        console.log(`[${unitState.name}] has taken ${damageDone} damage [Resilience]. [${unitState.name}: ${unitState.health} hp]`);
        if (targetState.health <= 0) {
          targetState.conclusion(unitState);
          console.log(`${unitState.name} has been slain.`);
        } else {
          return;
        }
      }
    }

  }
});

const hasEndedBattle = (unitState) => ({
  conclusion: (targetState) => {
    console.log(`The ${unitState.name} has vanquished the ${targetState.name}`);
    console.log(unitState.name === 'Champion' ? victory.blue : defeat.red);
    process.exit()
  }
});

const victory = `
888     888 d8b          888                              888
888     888 Y8P          888                              888
888     888              888                              888
Y88b   d88P 888  .d8888b 888888  .d88b.  888d888 888  888 888
 Y88b d88P  888 d88P"    888    d88""88b 888P"   888  888 888
  Y88o88P   888 888      888    888  888 888     888  888 Y8P
   Y888P    888 Y88b.    Y88b.  Y88..88P 888     Y88b 888  "
    Y8P     888  "Y8888P  "Y888  "Y88P"  888      "Y88888 888
                                                      888
                                                 Y8b d88P
                                                  "Y88P"
`;

const defeat = `
8888888b.            .d888                   888    888
888  "Y88b          d88P"                    888    888
888    888          888                      888    888
888    888  .d88b.  888888  .d88b.   8888b.  888888 888
888    888 d8P  Y8b 888    d8P  Y8b     "88b 888    888
888    888 88888888 888    88888888 .d888888 888    Y8P
888  .d88P Y8b.     888    Y8b.     888  888 Y88b.   "
8888888P"   "Y8888  888     "Y8888  "Y888888  "Y888 888
`;

module.exports = { canAttack, canDefend, hasEndedBattle };
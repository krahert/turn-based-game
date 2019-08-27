const colors = require('colors');
const victory = require('../asciiArt/headers').victory;
const defeat = require('../asciiArt/headers').defeat;

const unitColor = unitName => {
  return unitName === 'Champion'
    ? colors.blue(unitName)
    : colors.red(unitName);
};

const canAttack = (unitState) => ({
  attack: (targetState) => {
    const attackMissed = Math.floor(Math.random() * 100) < targetState.luck;
    if (!attackMissed) {
      targetState.defend(unitState);
    } else {
      console.log(`[${unitState.name}]'s attack missed.`.gray);
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
        console.log(`[${unitColor(unitState.name)}] has taken ${damageDone} damage. [${unitColor(unitState.name)}: ${unitState.health} hp]`);
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
        console.log('[Resilience]'.yellow);
        console.log(`[${unitColor(unitState.name)}] has taken ${damageDone} damage. [${unitColor(unitState.name)}: ${unitState.health} hp]`);
        if (targetState.health <= 0) {
          targetState.conclusion(unitState);
        } else {
          return;
        }
      }
    }

  }
});

const hasEndedBattle = (unitState) => ({
  conclusion: (targetState) => {
    unitState.name === 'Champion'
    ? console.log(`The ${unitState.name} has vanquished the ${targetState.name}`.blue)
    : console.log(`The ${unitState.name} has vanquished the ${targetState.name}`.red);

    console.log(unitState.name === 'Champion' ? victory.blue : defeat.red);
    process.exit()
  }
});

module.exports = { canAttack, canDefend, hasEndedBattle };
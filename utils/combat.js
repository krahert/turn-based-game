const colors = require('colors');

const canAttack = (unitState) => ({
  attack: (targetState) => {
    const attackMissed = Math.floor(Math.random() * 100) < targetState.luck;
    if (!attackMissed) {
      // de facut player vs mob, all-in-one
      targetState.defend(unitState);
    } else {
      console.log(`[${unitState.name}]'s attack missed.`.bgWhite.gray);
      //? Reset la resilience
      if (typeof targetState.canUseResilience !== 'undefined') {
        targetState.canUseResilience = true;
      }
      //? *******************
      return;
    }
  }
});

const canDefend = (unitState) => ({
  defend: (targetState, skill) => {
    // console.log(unitState.conclusion);
    if (!skill) {
      const damageDone = targetState.strength - unitState.defence;
      //! DE FACUT REUTILIZABIL
      if (damageDone > 0) {
        unitState.health = unitState.health - damageDone;
        //? Reset la resilience
        if (typeof unitState.canUseResilience !== 'undefined') {
          unitState.canUseResilience = true;
        }
        //? *******************
        console.log(`[${unitState.name}] has taken ${damageDone} damage. [${unitState.name}: ${unitState.health} hp]`.bgGreen.black);
        if (unitState.health <= 0) {
          // unitState.conclusion(targetState);
          //! **********************
        } else {
          return;
        }
      }
      //! de scris in helper function
    } else if (skill === 'resilience') {
      const damageDone = Math.floor((unitState.strength - targetState.defence) / 2);
      if (damageDone > 0) {
        targetState.health = targetState.health - damageDone;
        console.log(`[${unitState.name}] has taken ${damageDone} damage [Resilience]. [${unitState.name}: ${unitState.health} hp]`.bgGreen.black);
        if (targetState.health <= 0) {
          // unitState.conclusion(targetState);
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
    console.log(unitState.name === 'Champion' ? 'VICTORY' : 'DEFEAT');
    process.exit()
  }
});

module.exports = { canAttack, canDefend, hasEndedBattle };
const colors = require('colors');

const canAttack = (unitState) => ({
  attack: (targetState) => {
    const attackMissed = Math.floor(Math.random() * 100) < targetState.luck;
    if (!attackMissed) {
      targetState.defend(unitState);
    } else {
      console.log(`[${unitState.name}]'s attack missed.`.bgRed.white);
      //! Reset la resilience
      if (typeof targetState.canUseResilience !== 'undefined') {
        targetState.canUseResilience = true;
      }
      return;
    }
  }
});

const canDefend = (unitState) => ({
  defend: (targetState) => {
    const damageDone = targetState.strength - unitState.defence;
    //! DE FACUT REUTILIZABIL
    if (damageDone > 0) {
      unitState.health = unitState.health - damageDone;
      //! Reset la resilience
      if (typeof unitState.canUseResilience !== 'undefined') {
        unitState.canUseResilience = true;
      }
      console.log(`[${unitState.name}] has taken ${damageDone} damage. [${unitState.name}: ${unitState.health} hp]`.bgGreen.black);
      if (unitState.health <= 0) {
        // lose condition
        console.log(`${unitState.name} has been slain.`.bgBlue.black);
        //! **********************
      } else {
        return;
      }
    }
  },
  resilientDefence: (targetState) => {
    const damageDone = unitState.strength - targetState.defence;
    if (damageDone > 0) {
      targetState.health = targetState.health - damageDone / 2;
      if (targetState.health <= 0) {
        // lose condition
        console.log(`${unitState.name} has been slain.`);
      } else {
        return;
      }
    }
  }
});

module.exports = { canAttack, canDefend };
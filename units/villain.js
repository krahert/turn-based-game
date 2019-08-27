const { generateStats, canAttack, canDefend, hasEndedBattle } = require('../utils');

const villain = () => {
  const state = {
    name: 'Villain',
    usesSkills: false,
    ...generateStats('villain')
  }

  return Object.assign(
    {},
    state,
    canAttack(state),
    canDefend(state),
    hasEndedBattle(state));
}

module.exports = villain;
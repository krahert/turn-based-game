const { generateStats, canAttack, canDefend } = require('../utils');

const villain = () => {
  const state = {
    name: 'Villain',
    usesSkills: false,
    ...generateStats('villain')
  }

  return Object.assign({}, state, canAttack(state), canDefend(state));
}

module.exports = villain;
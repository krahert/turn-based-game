const { generateStats, canAttack, canDefend } = require('../utils');
// const { hasCriticalStrike, hasResilience } = require('../skills');

const player = name => {
  const state = {
    name: name || 'Champion',
    usesSkills: true,
    canUseResilience: true,
    ...generateStats('player')
  }

  return Object.assign(
    {},
    state,
    canAttack(state),
    canDefend(state));
    // hasCriticalStrike(canAttack(state)),
    // hasResilience(canDefend(state)));
}

module.exports = player;
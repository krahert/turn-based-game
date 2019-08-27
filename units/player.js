const { generateStats, canAttack, canDefend, hasEndedBattle } = require('../utils/');
const { hasCriticalStrike, hasResilience } = require('../skills/');

const player = () => {
  const state = {
    name: 'Champion',
    usesSkills: true,
    canUseResilience: true,
    ...generateStats('player')
  }

  //! SKILLS reutilizabile. same obj for mobs and player
  // const skills = {
  //   attack: hasCriticalStrike(canAttack(state))
  // };

  const enhancedState = Object.assign(
    {},
    state,
    canAttack(state),
    canDefend(state));

  if (!state.usesSkills) {
    return Object.assign({}, enhancedState, hasEndedBattle(enhancedState));
  } else {
    return Object.assign(
      {},
      enhancedState,
      { attack: hasCriticalStrike(enhancedState).criticalStrike },
      { defend: hasResilience(enhancedState).resilience }
    );
  }
}

module.exports = player;
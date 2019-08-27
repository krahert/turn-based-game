const { generateStats, canAttack, canDefend, hasEndedBattle } = require('../utils/');
const { hasCriticalStrike, hasResilience } = require('../skills/');

const player = () => {
  const state = {
    name: 'Champion',
    usesSkills: true,
    canUseResilience: true,
    ...generateStats('player')
  }

  state.conclusion = hasEndedBattle(state).conclusion;

  //! SKILLS reutilizabile. same obj for mobs and player

  const enhancedState = Object.assign(
    {},
    state,
    canAttack(state),
    canDefend(state));

  if (!state.usesSkills) {
    return enhancedState;
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
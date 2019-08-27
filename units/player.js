const { generateStats, canAttack, canDefend, hasEndedBattle } = require('../mechanics');
const { hasCriticalStrike, hasResilience } = require('../skills/');

const player = () => {
  const state = {
    name: 'Champion',
    usesSkills: true,
    canUseResilience: true,
    ...generateStats('player')
  }

  state.conclusion = hasEndedBattle(state).conclusion;

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
      { defend: hasResilience(enhancedState).resilience, canUseResilience: true }
    );
  }
}

module.exports = player;
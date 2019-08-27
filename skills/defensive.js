const hasResilience = (unitState) => ({
  resilience: (targetState) => {
    const initialChance = Math.floor(Math.random() * 100);
    if (initialChance >= 20) {
      unitState.canUseResilience = true;
      unitState.defend(targetState);
    } else if (initialChance < 20 && unitState.canUseResilience) {
      unitState.defend(targetState, 'resilience');
    }
  }
});

module.exports = { hasResilience };
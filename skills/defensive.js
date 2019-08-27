const hasResilience = (unitState) => ({
  resilience: (targetState) => {
    console.log(unitState.canUseResilience);
    const initialChance = Math.floor(Math.random() * 100);

    if (initialChance >= 20) {
      if (unitState.canUseResilience === false) {
        unitState.canUseResilience = true;
      }
      unitState.defend(targetState);
    } else if (initialChance < 20 && unitState.canUseResilience === false) {
        unitState.canUseResilience = true;
        unitState.defend(targetState);
    } else if (initialChance < 20 && unitState.canUseResilience) {
        unitState.canUseResilience = false;
        unitState.defend(targetState, 'resilience');
    }
  }
});

module.exports = { hasResilience };
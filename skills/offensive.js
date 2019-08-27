const hasCriticalStrike = (unitState) => ({
  criticalStrike: (targetState) => {
    const initialChance = Math.floor(Math.random() * 100);
    if (initialChance >= 10) {
      unitState.attack(targetState);
    } else if (initialChance < 1) {
      console.log('[Crit x3]');
      unitState.attack(targetState);
      unitState.attack(targetState);
      unitState.attack(targetState);
    } else if (initialChance < 10) {
      console.log('[Crit x2]');
      unitState.attack(targetState);
      unitState.attack(targetState);
    }
  }
});

module.exports = { hasCriticalStrike };
const hasCriticalStrike = () => ({
  criticalStrike: (attack) => {
    let initialChance = Math.floor(Math.random() * 100);
    if (initialChance >= 20) {
      attack();
    } else if (initialChance < 20) {
      attack();
      attack();
    } else if (initialChance < 1) {
      attack();
      attack();
      attack();
    }
  }
});

module.exports = hasCriticalStrike;
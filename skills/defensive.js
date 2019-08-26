const hasResilience = () => ({
  resilience: (defend, resilientDefence) => {
    let initialChance = Math.floor(Math.random() * 100);
    if (initialChance >= 20) {
      defend();
    } else if (initialChance < 20) {
      resilientDefence();
    }
  }
});

module.exports = hasResilience;
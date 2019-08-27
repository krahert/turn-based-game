const units = require('../units/unitStats');

const getValueFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateStats = (unitType, custom) => {
  switch (unitType) {
    case 'player': {
      const playerStats = {};
      for (prop in units.player) {
        playerStats[prop] = getValueFromRange(units.player[prop][0], units.player[prop][1]);
      }
      return playerStats;
    }

    case 'villain': {
      const villainStats = {};
      for (prop in units.villain) {
        villainStats[prop] = getValueFromRange(units.villain[prop][0], units.villain[prop][1]);
      }
      return villainStats;
    }

    case 'custom': {
      const customStats = {};
      for (prop in custom) {
        customStats[prop] = getValueFromRange(custom[prop][0], custom[prop][1]);
      }
      return customStats;
    }

    default: return new Error(`Unit "${unitType}" does not exist`);
  }
};

module.exports = { generateStats, getValueFromRange };
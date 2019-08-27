// const http = require('http');

//! const { initiativeCalculator } = require('./utils/');

const Player = require('./units/player');
const Villain = require('./units/villain');

// const server = http.createServer((req, res) => {
// });
const player = Player();
const villain = Villain();

// console.log(player);
// console.log(villain);
//! initiativeCalculator(player, villain);

player.attack(villain);
villain.attack(player);
player.attack(villain);
villain.attack(player);
player.attack(villain);
villain.attack(player);
player.attack(villain);
villain.attack(player);
player.attack(villain);
villain.attack(player);
player.attack(villain);
villain.attack(player);
player.attack(villain);
villain.attack(player);
player.attack(villain);
villain.attack(player);
player.attack(villain);
villain.attack(player);
player.attack(villain);
villain.attack(player);
player.attack(villain);
villain.attack(player);
player.attack(villain);
villain.attack(player);

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
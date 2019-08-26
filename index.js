// const http = require('http');

const Player = require('./units/player');
const Villain = require('./units/villain');

// const server = http.createServer((req, res) => {
// });
const player = Player('Champion');
const villain = Villain();

// console.log(player);
// console.log(villain);

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
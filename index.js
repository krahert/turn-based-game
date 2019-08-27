// const http = require('http');
const { initiateCombat } = require('./utils/');
const Player = require('./units/player');
const Villain = require('./units/villain');

// const server = http.createServer((req, res) => {
// });
const player = Player();
const villain = Villain();

initiateCombat(player, villain);

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
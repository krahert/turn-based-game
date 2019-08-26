
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const testStats = require('./utils/index');

console.log(testStats.generateStats('player'));
console.log(testStats.generateStats('villain'));
console.log(testStats.generateStats('custom', {
  mana: [80, 120],
  spirit: [10, 20]
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
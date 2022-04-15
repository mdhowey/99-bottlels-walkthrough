const express = require('express');

const app = express();

const PORT = 4000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

// http://localhost:4000/bottles/:bottleCount
app.get('/bottles/:bottleCount', (req, res) => {
  let bottles = req.params.bottleCount;
  // ternary operator
  let nextBottle = bottles - 1 > 0 ? bottles - 1 : 99;
  const card1 = 'This is a dope card.'
  // http://localhost:4000/bottles/:bottleCount
  res.render('index.ejs', { bottles, nextBottle, card1 });
});

// http://localhost:4000/bottles/:bottleCount
app.get('/newTaco', (req, res) => {
  const card2 = 'I am selling some stuff here.'
  res.render('sell.ejs', { card2 });
});

app.get('/new', (req, res) => {
  const card3 = 'I am deleting what you requested'
  res.render('new.ejs', { card3 });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
});
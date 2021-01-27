// Require Libraries
const express = require('express');
// const https = require('https');

require('dotenv').config();

const Tenor = require('tenorjs').client({
  'Key': process.env.API_KEY,
  'Filter': 'high',
  'Locale': 'en_US'
});

// App Setup
const app = express();
app.use(express.static('public'));

// Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
  // Handle the home page when we haven't queried yet
  term = ""
  if (req.query.term) {
    term = req.query.term;
  }

  // Ternary method:
  // term = (req.query.term ? req.query.term : "");

  Tenor.Search.Query(term, "10")
    .then(response => {
      const gifs = response;
      res.render('home', { gifs });
    }).catch(console.error);
});

// app.get('/stretch', (req, res) => {
//   // Stretch Challenge:
//   // Perform the API call with 'https' module instead of 'tenorjs'
// });

// Start Server
app.listen(3000, () => {
  console.log("GIF Search listening on port localhost:3000!");
});

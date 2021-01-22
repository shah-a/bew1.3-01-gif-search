// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
  // set the GIF's URL
  const gifUrl = 'https://media1.tenor.com/images/64c42357f26497ef96f38b9fc530b078/tenor.gif?itemid=17594271';
  // render the hello-gif view, passing the gifUrl into the view to be displayed
  res.render('hello-gif', { gifUrl });
});

app.get('/greetings/:name', (req, res) => {
  // grab the name from the path provided
  const name = req.params.name;
  // render the greetings view, passing along the name
  res.render('greetings', { name });
});

// Start Server
app.listen(3000, () => {
  console.log("GIF Search listening on port localhost:3000!");
});

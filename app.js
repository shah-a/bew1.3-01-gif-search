// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware


// Routes
app.get('/', (req, res) => {
  res.send("Salaam, Squirrel! :)");
});

// Start Server
app.listen(3000, () => {
  console.log("GIF Search listening on port localhost:3000!");
});

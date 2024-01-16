// Import necessary modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const port = 3000; // Choose any available port

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// Define a route to render the index.ejs file
app.get('/', (req, res) => {
  res.render('index'); // Assuming index.ejs is in the "views" folder
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

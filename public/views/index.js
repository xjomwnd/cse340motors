// Import necessary packages
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const pg = require('pg');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use expressLayouts middleware
app.use(expressLayouts);

// Set the layout file for EJS (optional)
app.set('layout', 'layouts/layout');

// Define routes
app.get('/', (req, res) => {
  res.render('index', { title: 'PHP Motors' });
});

// Define a 404 route (optional)
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Define the port to listen on
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use expressLayouts middleware
app.use(expressLayouts);

// Set the layout file for EJS (optional)
app.set('layout', 'layouts/layout');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.render('index', { title: 'PHP Motors' });
});

// Define a 404 route (optional)
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

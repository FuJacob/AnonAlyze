require('dotenv').config();

// Import required modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const apiKey = process.env.APIFY_API_KEY;

// Middleware to parse JSON data
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Your api key is ${apiKey}`);
});

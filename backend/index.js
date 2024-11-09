// Import required modules
import express from 'express';
import { ApifyClient } from 'apify-client';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.APIFY_API_KEY;

// Middleware to parse JSON data
app.use(express.json());

// Initialize ApifyClient with the API token
const client = new ApifyClient({
  token: apiKey,
});

// Define a route to handle API requests from the frontend
app.get('/scrape-instagram', async (req, res) => {
  const input = {
    directUrls: [
      'https://www.instagram.com/valerie.tang/'
    ],
    resultsType: "posts",
    resultsLimit: 200,
    searchType: "hashtag",
    searchLimit: 1,
  };

  try {
    // Run the actor and retrieve results
    const run = await client.actor("apify/instagram-scraper").call(input);
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    
    // Send the retrieved items back to the frontend
    res.json({ items });
  } catch (error) {
    console.error('Error running Apify actor:', error);
    res.status(500).json({ error: 'Failed to fetch data from Apify' });
  }
});

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

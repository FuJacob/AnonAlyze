// Import required modules
import express from 'express';
import { ApifyClient } from 'apify-client';

import OpenAI from 'openai/index.mjs';

import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.APIFY_API_KEY;
const openAiKey = process.env.OPENAI_API_KEY;

// Middleware to parse JSON data
app.use(express.json());

// Initialize ApifyClient with the API token
const client = new ApifyClient({
    token: apiKey,
});

const openai = new OpenAI({
    apiKey: openAiKey,
});

// Define a route to handle API requests from the frontend
app.get('/analyze-privacy', async (req, res) => {
  const input = {
    directUrls: [
      'https://www.instagram.com/ashvinfittech/'
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
    
    const jsonData = JSON.stringify(items);

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: `You will be provided with json data of someone's Instagram profile.
                Your role will be to analyze the data and provide a summary of how protected their personal information is and how well they are protecting their personal privacy. 
                And provide a rating out of 10, of how well their privacy is protected and how well they are protecting their personal information. 
                Mention if they are sharing any personal information that could be used to identify them, such as their full name, address, phone number, email address, etc. 
                Here is the json data: ${jsonData}`,
            },
        ],
    });

    const privacyAnalysis = completion.choices[0].message.content;

    // Send the retrieved items back to the frontend
    res.json({
        rawData: items,
        privacyAnalysis: privacyAnalysis,
    });
  } catch (error) {
    console.error('Error during analysis:', error);
    res.status(500).json({ error: 'Failed to analyze privacy' });
  }
});


app.get('/gpt-analysis', (req, res) => {
    res.json({ message: completion.choices[0].message.content });
  });

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

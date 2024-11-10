// Import required modules
import express from 'express';

import cors from 'cors';

import { ApifyClient } from 'apify-client';

import OpenAI from 'openai/index.mjs';

import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.APIFY_API_KEY;
const openAiKey = process.env.OPENAI_API_KEY;

// Middleware to parse JSON data
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Initialize ApifyClient with the API token
const client = new ApifyClient({
    token: apiKey,
});

const openai = new OpenAI({
    apiKey: openAiKey,
});

const exampleOutput = {
    contentShared: "This is the first point",
    sensitiveInfo: "This is the second point",
    taggingBehaviour: "This is the third point",
    privacyImprovements: "This is the fourth point",
    rating: "AnonAlyze Score: 85/100",
}

// let inputUsername = "";

app.post('/send-url', async (req, res) => {
  const { input } = req.body;
  console.log('Received input from frontend:', input);
  // inputUsername = input;

  res.json({ message: `Received Instagram username: ${input}` });
});


// Define a route to handle API requests from the frontend
app.post('/analyze-privacy', async (req, res) => {
  const { inputUsername } = req.body;

  // if (!inputUsername) {
  //   return res.status(400).json({ error: 'Username is required for analysis' });
  // }
  console.log(inputUsername);


  const input = {
    directUrls: [
      `${inputUsername}`,
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
                And provide a rating out of 100, of how well their privacy is protected and how well they are protecting their personal information. 
                Mention if they are sharing any personal information that could be used to identify them, such as their full name, address, phone number, email address, etc. 
                Format the data in a way that can be used to display the information in a user-friendly way on the frontend of a website. 
                Try to limit your response to 3-4 sentences, in point form where it's in the form of a list, similar to this example output. 
                Also please do not add your own bolding or formatting to the text such as newline, points, or backslash characters, when I said point form I mean just a sentence. 
                Format it like this example output: ${JSON.stringify(exampleOutput)}.
                Make sure to follow that format, where the key is the criteria and the value is the sentence relating to that criteria.
                Here is the json data: ${jsonData}.`,
            },
        ],
    });

    const privacyAnalysis = JSON.parse(completion.choices[0].message.content);

    console.log(completion.choices[0].message.content);
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

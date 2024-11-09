import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
  token: 'apify_api_n0cIyMAfKMKTbP4VyHgxMdeNHGQIuy2HA9su',
});

const input = {
  "directUrls": [
    // "https://www.instagram.com/justanotherinternetrandom_/"
    'https://www.instagram.com/valerie.tang/'
  ],
  "resultsType": "posts",
  "resultsLimit": 200,
  "searchType": "hashtag",
  "searchLimit": 1
};

const run = await client.actor("apify/instagram-scraper").call(input);

console.log('Results from dataset');
console.log(`💾 Check your data here: https://console.apify.com/storage/datasets/${run.defaultDatasetId}`);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
items.forEach((item) => {
  console.dir(item);
});


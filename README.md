## Inspiration

This project was inspired by 1Password’s security challenge and the awareness-driven approach of Have I Been Pwned, motivating us to build a tool focused on data protection and user security.

## What it does

 **AnonAlyze** is a security first web application that utilizes a Instagram API to parse through and return a summary and scoring of any account, private or public, based off of a comprehensive criteria, which then returns tips for the user to encourage and guide them to more digital security. 

## How we built it

AnonAlyze is a single page webapp composed of various technologies

Our tech stack consists of:

 **Next.js**: A full-stack framework based around React.

 **TailwindCSS**: A customizable CSS utility framework for styling with classes.

**Express.js**: A Node.js designed for minimalistic web development. 

**OpenAI API**: Utilizing GPT-4o-mini to deliver tailored responses based on user input.

## Challenges we ran into

  - Connecting frontend and backend

  - Integrating an external API with OpenAI API

  - Maintaining fast processing time to reduce client-side delay

  - Structuring the web app for a clean, responsive UI/UX

## Accomplishments that we're proud of

  - Comprehensive planning, creation, and implementation of ideas

  - Balancing the workload effectively amongst 4 members

  - Leaning on group members for assistance 

  - Structuring the web app for a clean, responsive UI/UX

## What we learned

We advanced our skills in Next.js, Express.js, and integrations with Apify and OpenAI APIs. We focused on API management, performance optimization, and cohesive frontend-backend structure, gaining valuable experience in troubleshooting and building a responsive application.

## What's next for AnonAlyze

**Enhanced Depth Analysis**: AnonAlyze parses all user data to train a Large Language Model (LLM), enabling stricter criteria, stronger security, and tailored guidance.

**Harmful Link Detection**: By accessing API's such as Google Safe Browsing, we mentions of commonly found harmful URL's, such as short URL's, known harmful domains, and phishing links to enhance user security. 

**Database Implementation**: Through the usage of No-SQL databases, such as MongoDB, a schema could introduced to filter raw JSON data retrieved from API's.

**Device Portability**: Whilst our code does follow best practices, further implementation can be taken for various platforms and devices to improve accessability and responsiveness.
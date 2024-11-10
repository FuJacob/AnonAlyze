# AnonAlyze

## 💡 Inspiration
A [survey](https://nypost.com/2024/09/26/lifestyle/nearly-half-of-employed-people-have-fallen-victim-to-cyberattack-or-scam/?utm_source=chatgpt.com) in 2024 revealed that nearly 45% of 20,000 employed adults worldwide have fallen victim to a cyberattack or scam, due to a leakage of their sensitive personal data from social media accounts.  
What if there was a tool to check how securely you are protecting your privacy?

We wanted to address the problem of the security of personal data on social media platforms, to create a tool for users to easily check what kind of information they may unknowingly be sharing publicly.

## 🔍 What it does

 **AnonAlyze** is a security-first web application that can query publicly available data to inform the user about sensitive information they might be sharing unknowingly by using their Instagram username. Our tool generates a summary of their account privacy and returns personalized tips for the user to encourage and guide them to more digital security. 

## ⚙️ How we built it

Frontend:  
 **Next.js**: A full-stack framework based around React.  
 **TailwindCSS**: A customizable CSS utility framework for styling with classes.

Backend:  
**Express.js**: A Node.js designed for minimalistic web development.   
**OpenAI API**: Utilizing GPT-4o-mini to deliver tailored responses based on user input.
**Apify API**: Tool to allow us to scrape publicly available data from Instagram accounts.

## 🪦 Challenges we ran into
  - Connecting frontend and backend, was challenging as we had them both working perfectly separately but had to make the frontend connect to the API endpoints in our backend
  - Integrating an external API with Apify API was challenging due to their minimal documentation and lack of tutorials
  - Maintaining fast processing time to reduce client-side delay
  - Structuring the web app for a clean, responsive UI/UX

## 😁 Accomplishments that we're proud of
  - Comprehensive planning, creation, and implementation of ideas
  - Balancing the workload effectively amongst 4 members
  - Structuring the web app for a clean, responsive UI/UX
  - Learning and working with new and unfamiliar tools such as Express.js and the Apify API

## 📖 What we learned
We advanced our skills in Next.js, Express.js, and integrations with Apify and OpenAI APIs. We focused on API management, performance optimization, and cohesive frontend-backend structure, gaining valuable experience in troubleshooting and building a responsive application.

## 🤔 What's next for AnonAlyze
**Expand to more platforms**: Currently we are only checking the users Instagram account, in the future we could have integrations to other social media accounts too such as LinkedIn, Twitter, and FaceBook

**Enhanced Depth Analysis**: AnonAlyze parses all user data to train a Large Language Model (LLM), enabling stricter criteria, stronger security, and tailored guidance.

**Harmful Link Detection**: By accessing API's such as Google Safe Browsing, we mentions of commonly found harmful URL's, such as short URL's, known harmful domains, and phishing links to enhance user security. 

**Database Implementation**: Through the usage of No-SQL databases, such as MongoDB, a schema could introduced to filter raw JSON data retrieved from API's.

**Device Portability**: Whilst our code does follow best practices, further implementation can be taken for various platforms and devices to improve accessability and responsiveness.
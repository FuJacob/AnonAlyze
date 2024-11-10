# AnonAlyze

## 💡 Inspiration
**AnonAlyze**'s journey began when having not known each other until now, we used Hackerdex to share our social media accounts. As we explored each other’s profiles, it quickly became clear just how much sensitive information we were all unintentionally sharing online. This opened our eyes to the security risks we each faced on social media, especially as we realized how easy it could be for outsiders to misuse our information.

Moreover, a [survey](https://nypost.com/2024/09/26/lifestyle/nearly-half-of-employed-people-have-fallen-victim-to-cyberattack-or-scam/?utm_source=chatgpt.com) in 2024 revealed that nearly 45% of 20,000 employed adults worldwide have fallen victim to a cyberattack or scam, due to a leakage of their sensitive personal data from social media accounts.  
What if there was a tool to check how securely you are protecting your privacy?


## 🔍 What it does

**AnonAlyze** addresses this issue by not only scanning users' profiles to identify publicly accessible data that may put them at risk but also by educating users on cybersecurity best practices. By providing personalized insights into risky social media behaviors, **AnonAlyze** empowers users to make informed choices, helping them protect their privacy and better understand the impact of online exposure. Our tool is dedicated to enhancing security awareness and fostering a safer digital experience for all.

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

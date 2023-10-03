# JobCrawler README
Welcome to JobCrawler! This is a React-based web application designed to automate the job hunting process by leveraging the Metaphor API and OpenAI, deployed on AWS Lambdas. Our unique platform scours GitHub profiles with Beautiful Soup to curate job postings tailored to the technologies and projects individuals are involved in. Uncover a world of job opportunities with JobCrawler!

## Features:
Automated Job Discovery: Utilizes Metaphor API for in-depth searches to identify relevant job postings.
Smart Curation: Employs OpenAI to analyze and categorize job postings, ensuring relevance to the technologies found on GitHub profiles.
Serverless Architecture: Hosted on AWS Lambda for high availability and scalability without the management of servers.
GitHub Profile Scrapping: Leverages Beautiful Soup for precise scraping of GitHub profiles to determine the technologies and projects individuals are engaged with.

## Prerequisites:
AWS Account
Metaphor API Key
OpenAI API Key
Node.js 14.x or later

### Installation:
- Clone the repository `https://github.com/nikhilnair31/JobCrawler.git`
- `cd JobCrawler`
- Install the required packages `npm install`
- Configure AWS

### Usage:
Start the development server:

```
npm start
```
Open your web browser and navigate to http://localhost:3000 to view the JobCrawler application.

## Contributing:
We encourage contributions! Please see the CONTRIBUTING.md file for details on how to contribute to JobCrawler.

## License:
JobCrawler is licensed under the MIT License - see the LICENSE.md file for details.
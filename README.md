![spook.png](https://pbxt.replicate.delivery/BQAmE4HRsQL0EBOiUQbnbynfwDiSzoMv4TNHYG7e002wVkqRA/discoart-result.png)

# JobCrawler README
Welcome to JobCrawler! This is a React-based web application designed to automate the job hunting process by leveraging the Metaphor API and OpenAI, deployed on Firebase and using AWS Lambda for the serverless architecture. It scours across teh interet to curate a list of job postings based on the technologies and projects individuals are working on based on your GitHub profile. Here's a glimpse into how JobCrawler can turbocharge your job search or talent acquisition strategy.

## Features:
- **Automated Job Discovery**: Utilizes Metaphor API for in-depth searches to identify relevant job postings.
- **Smart Curation**: Employs OpenAI to analyze and categorize job postings, ensuring relevance to the technologies found on GitHub profiles.
- **Serverless Architecture**: Hosted on AWS Lambda for high availability and scalability without the management of servers.
- **GitHub Profile Scrapping**: Leverages Beautiful Soup for precise scraping of GitHub profiles to determine the technologies and projects individuals are engaged with.

## Prerequisites:
- AWS Account
- Metaphor API Key
- OpenAI API Key
- Node.js 14.x or later

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
Open your web browser and navigate to http://localhost:3000 to view the JobCrawler application or visit https://job-alert-llm.web.app/

## Contributing:
We encourage contributions! Please see the CONTRIBUTING.md file for details on how to contribute to JobCrawler.

## License:
JobCrawler is licensed under the MIT License - see the LICENSE.md file for details.
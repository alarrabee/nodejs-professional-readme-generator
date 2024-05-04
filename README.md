Boot Camp Module 9 Challenge

# Description
This is the week 9 Module Challenge for the U of M Coding Bootcamp

# Node.js: Professional README Generator
The challenge was to create a command-line application that dynamically generates a professional README.md file from a user's input.

## User Story
```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
## Application Functionality
![image](https://github.com/alarrabee/nodejs-professional-readme-generator/assets/149320486/18d7e22b-99ca-4d1e-8b72-a47d2de09027)

## Installation Instructions
Prerequisites
- Node.js
- npm
  
1. Clone the repository:
   ```bash
   https://github.com/alarrabee/nodejs-professional-readme-generator.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
5. Invoke application:
   ```bash
   node index.js
   ```

## Usage Information
1. Using the command line answer each prompt as it appears and press enter.
2. When all prompts have been answered you will see a message displayed stating that your README was successfully generated.
3. Navigate to the dist folder to see your newly generated README.md file.

## Acknowledgments
Guidance provided by edX Web Development Tutor Team (Megan Meyers)

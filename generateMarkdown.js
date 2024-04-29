// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This projects is licensed under the ${data.license} License.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions please see ${data.github}  or send an email to ${data.email}
`;
}

module.exports = generateMarkdown;

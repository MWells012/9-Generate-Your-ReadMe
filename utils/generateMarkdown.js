// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// make the badge appear
function renderLicenseBadge(license) {
  if (license !== "no license to display"){
      return `
![licence-badge](http://img.shields.io/badge/license-${license}-blue.svg)
      `;
  }else{
      return ' ';
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// link the actual license
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// none to display
function renderLicenseSection(license) {
  if (license !== 'no license to display') {
    return `The application is covered under the following license: ${license}
    For more information about this license, click the link:${renderLicenseLink(license)}
    :`
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
  return `
  ## ${data.title}

  ${renderLicenseBadge(data.license)}

  ${data.description}

  Link to deployed sit.(${data.url})
  ## Table-of-Contents
  1. [Functionality](#functionality)
      -[User Story](#user-story)
      -[Acceptance Criteria](#acceptance-criteria)
      -[Screenshots](#screenshots)
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributors](#contributors)
  5. [Tests](#tests)
  6. [Questions](#Questions)
      
  ## Functionality
  ${data.functionality}
  ---
  ## User Story
  ---
  ## Acceptance Criteria
  ---
  ## Screenshots
  ---
  ## Installation 
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ## Contributors
  To contribute to this application:
   1. fork the repo
   2. create your own branch 
   3. commit your local changes
   4. push your branch to GitHub
  Pending review, your changes will be added and pending review
  ${data.contributors}
  ## Tests
  ${data.tests}
  ## Questions
  For any questions, you may contact me via GitHub (https://github.com/${data.gitHub})
      or via email at ${data.email}
   `;
  };
  
  module.exports = generateMarkdown;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// make the badge appear
function renderLicenseBadge(license) {
  if (license !== "no license to display"){
      return `
![licence-badge](http://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
      return ' ';
  }
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// link the actual license
function renderLicenseLink(license) {
  if (license === "mozilla") {
      return `
[${license}](https://choosealicense.com/licenses/mpl-2.0/)
      `
  }else if( license === 'apache'){
      return `
[${license}](https://choosealicense.com/licenses/apache-2.0/)
      `
  }else if( license === 'mit'){
      return `
[${license}](https://choosealicense.com/licenses/mit/)
      `
  }else if( license === 'GNU'){
      return `
[${license}](https://choosealicense.com/licenses/agpl-3.0/)
      `
  }else if( license === 'no license'){
      return `
      no license to display
      `
  }
};

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
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](Usage)
  4. [License](#License)
  5. [Contributors](#Contributors)
  6. [Tests](#Tests)
  7. [Questions](#Questions)
  8. [GitHub-Username] (#GitHub-Username)
  9. [Contact-Info] (#Contact-Info)
      
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
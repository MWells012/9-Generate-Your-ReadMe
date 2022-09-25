// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// make the badge appear
function renderLicenseBadge(license) {}

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
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ${data.description}

  Link to deployed sit.(${data.url})

`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license !== 'none') {
    return `![License Badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
  return `## License

  The project is covered by the following license:

  ${renderLicenseLink(license)}`;
  } else {
    return 'There is no license for this project.';
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Table Of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#credits)
  * [Tests](#test)
  * [License](#license)
  * [Questions](#questions)
   
  ## Desciption

  ${data.motivation}

  ${data.reason}

  ${data.problem}

  ${data.learn}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.credits}

  ## Tests

  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Questions

  For any questions about the project, please reach out to the information below:
  > Email: ${data.email}
  > GitHub: ${data.github}

`;
}

module.exports = generateMarkdown;

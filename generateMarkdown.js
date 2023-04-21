function generateMarkdown(data) {
  if (data.license === "MIT License") {
    data.license = "![https://img.shields.io/badge/license-MIT-green](https://img.shields.io/badge/license-MIT-green)";
    licenseLink = "https://choosealicense.com/licenses/mit/";
  }
  if (data.license === "Apache") {
    data.license = "![https://img.shields.io/badge/license-Apache-blue](https://img.shields.io/badge/license-Apache-blue)";
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
  }


return `# ${data.title}

${data.license}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Test](#test)
* [License](#license)
* [License](#license)
* [Questions](#questions)



## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributing}

## Test
${data.test}

## License
${data.license}

For additional information on this license please use the provided link
${licenseLink}

## Questions
Github: https://github.com/${data.github}

Email: ${data.email}


`;
}




module.exports = generateMarkdown;

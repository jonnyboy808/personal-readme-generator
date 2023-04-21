function generateMarkdown(data) {
  if (data.license === "MIT License") {
    data.license = "![https://img.shields.io/badge/license-MIT-green](https://img.shields.io/badge/license-MIT-green)";
  }
  if (data.license === "Apache") {
    data.license = "![https://img.shields.io/badge/license-Apache-blue](https://img.shields.io/badge/license-Apache-blue)";
  }


return `# ${data.title}
## License
${data.license}

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributions](#contributions)
5. [Test](#test)
6. [Question](#question)
7. [License](#license)


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

## Question
${data.github}
${data.email}


`;
}




module.exports = generateMarkdown;

function generateMarkdown(data) {
  if (data.license === "MIT License") {
    data.license = "[![License: MIT](https://img.shields.io/badge/license-MIT-green)";
  }
  if (data.license === "Apache") {
    data.license = "[![License](https://img.shields.io/badge/license-Apache-blue)";
  }


return `# ${data.title}

## Table of Contents

2. [Description](#Description)
3. [Installation](#Installation)
4. [Usage](#Usage)
5. [Contributions](#Contributions)
6. [Test](#Test)
7. [Github](#Github)
8. [Email](#Email)
9. [License](#License)


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

## Github
${data.github}

## Email
${data.email}

## License

`;
}




module.exports = generateMarkdown;

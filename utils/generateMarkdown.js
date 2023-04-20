function generateMarkdown(data) {
  if (data.license === "MIT License") {
    data.license = "[![License: MIT](https://img.shields.io/badge/license-MIT-green)";
  }
  if (data.license === "Apache") {
    data.license = "[![License](https://img.shields.io/badge/license-Apache-blue)";
  }


return `# Table of Contents
1. [Title](#Title)
2. [Description](#Description)
3. [Installation](#Installation)
4. [Usage](#Usage)
5. [Contributions](#Contributions)
6. [Test](#Test)
7. [Github](#Github)
8. [Email](#Email)
9. [License](#License)

# ${data.title}

# Description
${data.Description}

# Installation
${data.Installation}

# Usage
${data.Usage}

# Contributions
${data.Contributions}

# Test
${data.Test}

# Github
${data.Github}

# Email
${data.Email}
`;
}




module.exports = generateMarkdown;

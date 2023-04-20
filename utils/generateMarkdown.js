function generateMarkdown(data) {
  if (data.license === "MIT License") {
    data.license = "[![License: MIT](https://img.shields.io/badge/license-MIT-green);
  }
  if (data.license === "Apache") {
    data.license = "[![License](https://img.shields.io/badge/license-Apache-blue)";
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

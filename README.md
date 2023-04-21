# Personal README Generator

![https://img.shields.io/badge/license-MIT-green](https://img.shields.io/badge/license-MIT-green)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Code Example](#code-example)
* [Walkthrough](#walkthrough)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)



## Description
An easy to use command line interface applications that creates a README based on just answering a few command line questions.

## Installation
Installation steps of this application would require forking this repo and cloning it to your local machine to run.

## Code Example
Below is an example of a function that creates the badge element for the generated markdown.
```JS
function generateMarkdown(data) {
  if (data.license === "MIT License") {
    data.license = "![https://img.shields.io/badge/license-MIT-green](https://img.shields.io/badge/license-MIT-green)";
    licenseLink = "https://choosealicense.com/licenses/mit/";
  }
  if (data.license === "Apache") {
    data.license = "![https://img.shields.io/badge/license-Apache-blue](https://img.shields.io/badge/license-Apache-blue)";
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
  }}
```
## Walkthrough 
![Gif walkthrough](./assets/walkthrough.gif)

[Walkthrough](https://drive.google.com/file/d/1g2esLjp7tbgopntT9NIdbHiqmn65aM99/view)

## Usage
After cloning this repo to your local machine, open it with your preferred application or start directly from your command line. You will need to run the "node index.js" command to get started. Once initiated, the application will give a series of prompts with questions, answer and many questions that are needed, or N/A if not applicable. At the end of the prompts you will receive a message acknowledging that a new README has been generated.



## License
![https://img.shields.io/badge/license-MIT-green](https://img.shields.io/badge/license-MIT-green)

For additional information on this license please use the provided link
https://choosealicense.com/licenses/mit/

## Questions
Github: https://github.com/jonnyboy808



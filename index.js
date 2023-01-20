// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project titled?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter your project description',
        name: 'description',
    },
    {
        type: 'input', 
        message: 'Enter the command to install necessary dependencies',
        name: 'installation',
      },
      {
        type: 'input', 
        message: 'Provide an example of usage',
        name: 'usage',
      },
      {
        type: 'input', 
        message: 'Provide information about contributing',
        name: 'contributing',
      },
      {
        type: 'list', 
        choices: ['Apache 2.0','BSD 3-Clause', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'IBM Public License Version 1.0'],
        name: 'license',
      },
      {
        type: 'input', 
        message: 'What is your email address?',
        name: 'email',
      }, 
      {
        type: 'input', 
        message: 'What is your github username?',
        name: 'github',
      },  
];

// Function creates a readme file based on prompts from questions and inputs responses into data
inquirer.prompt(questions).then((data) => {
    // Assign readme sections
    let mkDown = generateMarkdown({
        title: `${data.title}`,
        description: `${data.description}`,
        installation: `${data.installation}`,
        usage: `${data.usage}`,
        contributing: `${data.contributing}`,
        test: `${data.test}`,
        license: `${data.license}`,
        email: `${data.email}`,
        github: `${data.github}`,
    })
    // make the data
    fs.writeFile('README.md', markdown, (err) => {
        if (err) {
            console.log(err); 
        } else {
            console.log('YOU DID IT!!!');
        }
    })
});

// Start app
function init() {}
init();

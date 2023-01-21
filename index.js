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
        type: 'input', 
        message: 'Provide information about running tests',
        name: 'test',
      }, 
      {
        type: 'list', 
        choices: ['Apache 2.0', 'GNU GPL v3',  'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New"',
        'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 
        'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'Mozilla Public License 2.0', 'The Unlicense',],
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
    fs.writeFile('README.md', mkDown, (err) => {
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

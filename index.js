// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('.utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your project motivation');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'reason',
        message: 'Why did you build this project?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your project reason');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem will it solve?',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please enter what your project will solve');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter what you learned');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter your installation steps');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your instructions and examples of use');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please enter your collaborators.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your collaborators');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license.',
        choices: ['MIT', 'Apache', 'GNU', 'None']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('Your README file has been created')
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

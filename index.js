const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// Array of questions for user input
const questions = [
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users run tests for your project?',
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Enter your GitHub information',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email information'
    }
])
.then((data) => {
const readMeAnswers = generateMarkdown(data)
const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;
fs.writeFile(filename, readMeAnswers,
(err) => err ? console.error(err) : console.log ('Success!'))
})
];

// Function to write README file


// // Function to initialize app
function init() {}
// //     inquirer.prompt(questions).then(answers => {
// //         writeToFile('README.md', answers);
// //     });
// // }


// Function call to initialize app
init();
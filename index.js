const { prompt } = require("inquirer");
const { writeFile } = require("fs");
const generateHTML = require("index.html");

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the team managers name?',
            name: 'manager',
            default: 'John Doe'
        },
        {
            type: 'input',
            message: 'What is the team managers employee id #?',
            name: 'managerID',
            default: '12-3456-789'
        },
        {
            type: 'input',
            message: 'What is the team managers email address?',
            name: 'managerEmail',
            default: 'manager@email.com'
        },
        {
            type: 'input',
            message: 'What is the team managers office phone number (format: 555-555-5555)?',
            name: 'managerPhone',
            default: '555-555-5555'
        },
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
            name: 'employeeJob',
            default: 'Engineer',
        },
        {
            type: 'input',
            message: 'What is the team members employee id #?',
            name: 'employeeID',
        },
        {
            type: 'input',
            message: 'What is the team members email address?',
            name: 'employeeEmail',
        },
        {
            type: 'input',
            message: 'What is the team managers email address?',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'What is the team managers email address?',
            name: 'managerEmail',
        },
    ])

    .then((response) =>
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
    );
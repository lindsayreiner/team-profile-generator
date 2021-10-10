const { prompt } = require("inquirer");
const { writeFile } = require("fs");
const generateHTML = require("./src/generateHTML");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const employees = [];

const managerQuestions = [
    {
        type: 'prompt',
        message: 'Please build your team'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'managerName',
        default: 'e.g. John Doe'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s employee id #?',
        name: 'managerID',
        default: 'format: 12-3456-789'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s email address?',
        name: 'managerEmail',
        default: 'manager@email.com'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s office phone number (format: 555-555-5555)?',
        name: 'managerPhone',
        default: '555-555-5555'
    },
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        name: 'employeeType',
        default: 'Engineer',
    }

];

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your engineer\'s name?',
        name: 'engineerName',
        default: 'e.g. John Doe'
    },
    {
        type: 'input',
        message: 'What is your engineer\'s employee id #?',
        name: 'engineerID',
        default: 'format: 12-3456-789'
    },
    {
        type: 'input',
        message: 'What is your engineer\'s email address?',
        name: 'engineerEmail',
        default: 'manager@email.com'
    },
    {
        type: 'input',
        message: 'What is your engineer\'s GitHub username?',
        name: 'engineerGitHub',
    },
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        name: 'employeeType',
        default: 'Engineer',
    }

];

const internQuestions = [
    {
        type: 'input',
        message: 'What is your interns name?',
        name: 'internName',
        default: 'e.g. John Doe'
    },
    {
        type: 'input',
        message: 'What is your interns employee id #?',
        name: 'internID',
        default: 'format: 12-3456'
    },
    {
        type: 'input',
        message: 'What is your intern\'s email address?',
        name: 'internEmail',
        default: 'manager@email.com'
    },
    {
        type: 'input',
        message: 'What is your intern\'s school?',
        name: 'internSchool',
    },
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        name: 'employeeType',
        default: 'Engineer',
    }
];


function writeToFile(data) {
    writeFile('index.html', data, (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log("Team saved successfully.");
        }
    });
}

async function startQuestions() {
    console.log('Please build your team')
    const managerAnswers = await prompt(managerQuestions);
    console.log(answers);

    nextEmployee();

};

async function nextEmployee() {
    if (employeeType === 'Engineer') {
        const { engineerName, engineerID, engineerEmail, engineerGithub } = await prompt(engineerQuestions);
        const newEngineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);
        employees.push(newEngineer);
        console.log(answers);

    } else if (employeeType === 'Intern') {
        const { internName, internID, internEmail, internSchool } = await prompt(internQuestions);
        const newIntern = new Engineer(internName, internID, internEmail, internSchool);
        employees.push(newIntern);
        console.log(answers);
    } else {
        (employeeType === 'I don\'t want to add any more team members')
        console.log('Team build complete!')
    };

    console.log(answers);

    const data = await generateHTML(answers);
    writeToFile(data);

};



function init() {
    startQuestions();
}


init();
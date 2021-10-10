const { prompt } = require("inquirer");
const { writeFile } = require("fs");
const generateHTML = require("./src/generateHTML");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const employees = [];

const managerQuestions = [
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'managerName',
        default: 'John Doe'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s employee id #?',
        name: 'managerID',
        default: 'format: 12-3456'
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
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your engineer\'s name?',
        name: 'engineerName',
        default: 'Jake Doe'
    },
    {
        type: 'input',
        message: 'What is your engineer\'s employee id #?',
        name: 'engineerID',
        default: 'format: 12-3456'
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
        default: 'jakedoe'
    }
];

const internQuestions = [
    {
        type: 'input',
        message: 'What is your interns name?',
        name: 'internName',
        default: 'Jane Doe'
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
        default: 'UNC Chapel Hill'
    }
];

const addAnotherEmployee = [
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        name: 'employeeType',
        default: 'Engineer',
    }
];


async function startQuestions() {
    console.log('Please build your team')
    const { managerName, managerID, managerEmail, managerPhone } = await prompt(managerQuestions);
    const addNewEmployee = await prompt(addAnotherEmployee);
    const newManager = new Manager(managerName, managerID, managerEmail, managerPhone);
    employees.push(newManager);

    nextEmployee(addNewEmployee.employeeType);

};

async function nextEmployee(answers) {
    if (answers === 'Engineer') {
        const { engineerName, engineerID, engineerEmail, engineerGithub } = await prompt(engineerQuestions);
        const addNewEmployee = await prompt(addAnotherEmployee);
        const newEngineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);
        employees.push(newEngineer);
        nextEmployee(addNewEmployee.employeeType);
        return

    } else if (answers === 'Intern') {
        const { internName, internID, internEmail, internSchool } = await prompt(internQuestions);
        const addNewEmployee = await prompt(addAnotherEmployee);
        const newIntern = new Engineer(internName, internID, internEmail, internSchool);
        employees.push(newIntern);
        nextEmployee(addNewEmployee.employeeType);
        return
    }


    console.log('Team build complete!')
    const data = await generateHTML(employees);
    writeToFile(data);




};

function writeToFile(data) {
    writeFile('./dist/index.html', data, (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log("Team saved successfully.");
        }
    });
}

function init() {
    startQuestions();
}


init();
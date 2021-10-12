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
        default: '123',
        // validate: async function (input) {
        //     if (isNaN(input) || input < 1 || input > 5000) {
        //         return 'Employee ID must be a number between 1 and 5000'
        //     } else {
        //         return '---Employee ID has been accepted---'
        //     }
        // }
    },
    {
        type: 'input',
        message: 'What is the team manager\'s email address?',
        name: 'managerEmail',
        default: 'manager@email.com',
    },
    {
        type: 'input',
        message: 'What is the team manager\'s office phone number?',
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
        default: '456'
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
        default: '789'
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



const startQuestions = async input => {
    console.log('Please build your team starting with the Manager:')
    const { managerName, managerID, managerEmail, managerPhone } = await prompt(managerQuestions);
    const addNewEmployee = await prompt(addAnotherEmployee);
    const newManager = new Manager(managerName, managerID, managerEmail, managerPhone);
    employees.push(newManager);

    nextEmployee(addNewEmployee.employeeType);

};

const nextEmployee = async answers => {
    if (answers === 'Engineer') {
        console.log('Adding an Engineer to your team.....');
        console.log('Please enter this Engineer\'s information:')
        const { engineerName, engineerID, engineerEmail, engineerGithub } = await prompt(engineerQuestions);
        const addNewEmployee = await prompt(addAnotherEmployee);
        const newEngineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);
        employees.push(newEngineer);
        nextEmployee(addNewEmployee.employeeType);
        return

    } else if (answers === 'Intern') {
        console.log('Adding an Intern to your team.....')
        console.log('Please enter this Intern\'s information:')
        const { internName, internID, internEmail, internSchool } = await prompt(internQuestions);
        const addNewEmployee = await prompt(addAnotherEmployee);
        const newIntern = new Intern(internName, internID, internEmail, internSchool);
        employees.push(newIntern);
        nextEmployee(addNewEmployee.employeeType);
        return
    }

    console.log('Team build complete!')
    const data = await generateHTML(employees);
    writeToFile(data);
};

const writeToFile = data => {
    writeFile('./dist/index.html', data, (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log("Dashboard ready to view.");
        }
    });
}

function init() {
    startQuestions();
}


init();
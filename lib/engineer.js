const inquirer = require("inquirer");
const employee = require("employee");

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
        super(name, id, email, role);
    }

    getGithub(github) {

    }

    getRole(role) {
        return 'Engineer';
    }
}
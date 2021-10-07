const inquirer = require("inquirer");
const employee = require("employee");

class Intern extends Employee {
    constructor(school) {
        this.school = school;
        super(name, id, email, role);
    }

    getSchool() {

    }

    getRole(role) {
        return 'Intern';
    }
}
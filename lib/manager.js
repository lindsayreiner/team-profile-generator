const inquirer = require("inquirer");
const employee = require("employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
        super(name, id, email, role);
    }

    getOfficeNumber(officeNumber) {

    }

    getRole(role) {
        return 'Manager';
    }
}
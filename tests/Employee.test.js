const Employee = require('../lib/employee');

test('name', () => {
    const employeeName = 'John Doe'
    const employee = new Employee(employeeName);
    expect(employee.name).toBe(employeeName);
});

test('id', () => {
    const employeeID = '12-3456';
    const employee = new Employee(employeeID);
    expect(employee.id).toBe(employeeID);
});

test('email', () => {
    const employeeEmail = 'john@gmail.com';
    const employee = new Employee(employeeEmail);
    expect(employee.email).toBe(employeeEmail);
});
const Manager = require('../lib/manager');

test('phoneNumber', () => {
    const officeNumber = '555-555-5555';
    const manager = new Manager('Jeff Stewart', '12-3456', 'jeff@gmail.com', officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});
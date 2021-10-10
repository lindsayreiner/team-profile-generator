const Manager = require('../lib/manager');

test('phoneNumber', () => {
    const phoneNumber = '555-555-5555';
    const manager = new Manager(phoneNumber);
    expect(manager.phoneNumber).toBe(phoneNumber);
});
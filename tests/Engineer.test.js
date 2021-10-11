const Engineer = require('../lib/engineer');

test('github', () => {
    const engineerGithub = 'johndoe'
    const engineer = new Engineer('John Doe', '12-3456', 'john@gmail.com', engineerGithub);
    expect(engineer.github).toBe(engineerGithub);
});
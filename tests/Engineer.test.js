const Engineer = require('../lib/engineer');

test('github', () => {
    const engineerGithub = 'johndoe'
    const engineer = new Engineer(engineerGithub);
    expect(engineer.github).toBe(engineerGithub);
});
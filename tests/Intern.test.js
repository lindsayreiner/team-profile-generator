const Intern = require('../lib/intern');

test('school', () => {
    const internSchool = 'UNC Chapel Hill';
    const intern = new Intern('Abby Miller', '12-3456', 'abby@gmail.com', internSchool);
    expect(intern.school).toBe(internSchool);
});


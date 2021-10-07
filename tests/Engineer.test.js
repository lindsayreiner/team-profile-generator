const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

// describe('Word class', () => {
//     it('Creates an array of Letter objects', () => {
//         const word = new Word('hi');

//         expect(word.letters).toEqual(
//             expect.arrayContaining([expect.objectContaining({ char: 'h' })])
//         );

//         expect(word.letters[0]).toBeInstanceOf(Letter);
//     });

//     describe('guessLetter', () => {
//         it('Correct guess returns true', () => {
//             expect(new Word('fish').guessLetter('i')).toBe(true);
//         });

//         it('Incorrect guess returns false', () => {
//             expect(new Word('fish').guessLetter('o')).toBe(false);
//         });
//     });

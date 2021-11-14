// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//test isPhoneNumber()
test('isPhoneNumber() test#1 (true)', () => {
    expect(functions.isPhoneNumber('858-717-5496')).toBe(true);
});
test('isPhoneNumber() test#2 (true)', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber() test#3 (false)', () => {
    expect(functions.isPhoneNumber('(858)2124378')).toBe(false);
});
test('isPhoneNumber() test#4 (false)', () => {
    expect(functions.isPhoneNumber('jsdgakdj')).toBe(false);
});



//test isEmail()
test('isEmail() test#1 (true)', () => {
    expect(functions.isEmail('ziz006@ucsd.edu')).toBe(true);
});
test('isEmail() test#2 (true)', () => {
    expect(functions.isEmail('zzj@gmail.com')).toBe(true);
});
test('isEmail() test#3 (false)', () => {
    expect(functions.isEmail('lzcao@gmail')).toBe(false);
});
test('isEmail() test#4 (false)', () => {
    expect(functions.isEmail('@asdad.com')).toBe(false);
});


//test isStrongPassword()
test('isStrongPassword() test#1 (true)', () => {
    expect(functions.isStrongPassword('woshizzj')).toBe(true);
});
test('isStrongPassword() test#2 (true)', () => {
    expect(functions.isStrongPassword('abcdefg')).toBe(true);
});
test('isStrongPassword() test#3 (false)', () => {
    expect(functions.isStrongPassword('kobebryantnb1234')).toBe(false);
});
test('isStrongPassword() test#4 (false)', () => {
    expect(functions.isStrongPassword('2')).toBe(false);
});


//test isDate()
test('isDate() test#1 (true)', () => {
    expect(functions.isDate('11/13/2021')).toBe(true);
});
test('isDate() test#2 (true)', () => {
    expect(functions.isDate('08/22/2000')).toBe(true);
});
test('isDate() test#3 (false)', () => {
    expect(functions.isDate('1/1/99')).toBe(false);
});
test('isDate() test#4 (false)', () => {
    expect(functions.isDate('202/3/456')).toBe(false);
});

//test isHexColor()
test('isHexColor() test#1 (true)', () => {
    expect(functions.isHexColor('#abc123')).toBe(true);
});
test('isHexColor() test#2 (true)', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('isHexColor() test#3 (false)', () => {
    expect(functions.isHexColor('#12BA')).toBe(false);
});
test('isHexColor() test#4 (false)', () => {
    expect(functions.isHexColor('#rgb123')).toBe(false);
});


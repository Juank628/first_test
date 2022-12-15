const {stringLength} = require('./app.js');

test('string length', ()=>{
    expect(stringLength('abc')).toBe(3)
    expect(stringLength('abcd')).toBe(4)
    expect(() => {
        stringLength('')
    }).toThrow(Error)
})

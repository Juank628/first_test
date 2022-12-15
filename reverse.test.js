const {reverseString} = require('./app.js')

test('reverse string', () => {
    expect(reverseString('abc')).toBe('cba')
})

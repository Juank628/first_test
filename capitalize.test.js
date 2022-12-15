const {capitalize} = require('./app.js')

test('capitalize', () => {
    expect(capitalize('juan')).toBe('Juan')
})
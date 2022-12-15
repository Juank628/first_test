const {Calculator} = require('./modules/Calculator.js')

describe("Calculator", () => {
    const calculator = new Calculator();

    test('add', () => {
        expect(calculator.add(7,3)).toBe(10)
    })

    test('substract', () => {
        expect(calculator.substract(7,3)).toBe(4)
    })

    test('divide', () => {
        expect(calculator.divide(8,2)).toBe(4)
    })

    test('multiply', () => {
        expect(calculator.multiply(7,3)).toBe(21)
    })
    
})
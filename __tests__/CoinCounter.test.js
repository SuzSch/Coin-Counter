

import Calculator from '../src/CoinCounter.js';

describe('Calculator', () => {

    test('should check if number is >0 or number is <=0', () => {
        const calculator = new Calculator(4.99);
        expect (calculator.amount).toEqual(4.99);
    });

    test("should calculate divisions by quarters", () => {
        const calculator = new Calculator(4.99);
        let quarterCalculate = calculator.calculate()
        console.log(quarterCalculate);
        expect(quarterCalculate).toBeCloseTo(19.96);
    });

    test("should calculate divisions by dimes", () => {
        const calculator = new Calculator(4.99);
        let dimeCalculate = calculator.calculate()
        console.log(dimeCalculate);
        expect(dimeCalculate).toBeCloseTo(2.40);
});
});
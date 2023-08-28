

import Calculator from '../src/CoinCounter.js';

describe('Calculator', () => {

    test('should check if number is >0 or number is <=0', () => {
        const calculator = new Calculator(4.99);
        expect (calculator.amount).toEqual(4.99);
    });
});
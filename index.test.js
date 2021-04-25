const { test, expect } = require('@jest/globals');
import * as index from "./index";
//1
describe('text function', () => {
    test('there is no M in Rosario', () => {
        expect (index.texto('Rosario')).not.toMatch(/M/);
    });
    test('but there is an M in America', () => {
        expect (index.texto('America')).toMatch(/m/);
    });
    test('Colours of the rainbow', () => {
        expect (index.texto('The colours of the rainbow are red, orange, yellow, green, blue, indigo and violet')).toContain('red','green','indigo');
    });
    test('Pink is not one of the colours of the rainbow', () => {
        expect (index.texto('The colours of the rainbow are red, orange, yellow, green, blue, indigo and violet')).not.toContain('pink');
    });
});
//2
describe('Addition Funtions', () => {
    test('1550 plus 3000 should be under or equal to 5000', () => {
        expect(index.suma(1550,3000)).toBeLessThanOrEqual(4550);
    });
    test('3000 plus 150.65 should be close to 3151', () => {
        expect(index.suma(3000,150.65)).toBeCloseTo(3150.65);
    });
});
//3
describe('Substracting functions', () => {
    test('15000 minus 3000 should be equal to 12000', () => {
        expect(index.resta(15000,3000)).toBe(12000);
    })
    test('but 15000 minus 3000 is not equal to 10000', () => {
        expect(index.resta(15000,3000)).not.toBe(10000);
    });
});
//4
    test('100 per 10 should be greater than 700', () => {
        expect(index.multiplicacion(100,10)).toBeGreaterThan(700);
    });
//5
describe('Divisions' , () => {
    test('Its not possible to divide by zero ', () => {
        expect(index.division(100,0)).toBe('No se puede dividir por 0');
    });
    test('but 100/50 is equal to 2', () => {
        expect(index.division(100,50)).toBe(2);
    });
});
//6
describe('Multiplication table', () => {
    test('Multiplying 5 for undefined', () => {
        expect(index.tablaMultiplicar(5,undefined)).toEqual([0,5,10,15,20,25,30,35,40,45,50]);
    })
    test('Multiplying 2 for 5', () => {
        expect(index.tablaMultiplicar(2,5)).toStrictEqual([0,2,4,6,8,10]);
    });
});
//7
    test('the square of 11 should be equal to 121', () => {
        expect(index.potencia(11,2)).toBe(121);
    });
//8
    test('the square of 10 plus the square of 8 should be equal to 164', () => {
        expect(index.anidada(10,8)).toBe(164);
    });
//9
    test('adding three left zeroes to the number ninety four', () => {
        expect(index.cerosIzq(94,5)).toBe('00094');
    });
const { test, expect } = require('@jest/globals');
import { toLower } from "lodash";
import * as index from "./index";
//1
test('there is no M in Rosario', () =>{
    expect (index.texto('Rosario')).not.toMatch(/M/);
})
test('but there is an M in America', () => {
    expect (index.texto('America')).toMatch(/m/);
});
//2
test('1550 plus 3000 is equal to 4550', () => {
    expect(index.suma(1550,3000)).toBe(4550);
});
//3
test('15000 minus 3000 is equal to 12000', () => {
    expect(index.resta(15000,3000)).toBe(12000);
})
test('but 15000 minus 3000 is not equal to 10000', () => {
    expect(index.resta(15000,3000)).not.toBe(10000);
});
//4
test('100 per 10 is equal to 1000', () => {
    expect(index.multiplicacion(100,10)).toBe(1000);
});
//5
test('100/0 is equal to 0', () => {
    expect(index.division(100,0)).toBeTruthy;
})
test('but 100/50 is equal to 2', () => {
    expect(index.division(100,50)).toBe(2);
});
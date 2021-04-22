const { test, expect } = require('@jest/globals');
require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
  });
//1
test('there is no M in Rosario', () =>{
    expect ('Rosario').not.toMatch(/M/);
})
test('but there is an M in America', () => {
    expect ('America').toMatch(/m/);
});
//2
test('1550 plus 3000 is equal to 4550', () => {
    expect(1550 + 3000).toBe(4550);
});
//3
test('15000 minus 3000 is equal to 12000', () => {
    expect(15000 - 3000).toBe(12000);
})
test('but 15000 minus 3000 is not equal to 10000', () =>{
    expect(15000-3000).not.toBe(10000);
});
//4

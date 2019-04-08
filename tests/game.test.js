//unit test cases
const functions = require('./CoreLogic');
test('n=5 & k=2 winner 3',()=>{
    expect(functions.game(5,2)).toBe(3);
})
test('n=17 & k=2 winner 3',()=>{
    expect(functions.game(17,2)).toBe(3);
})
test('n=88 & k=28 winner 26',()=>{
    expect(functions.game(88,28)).toBe(26);
})
test('n=7 & k=17 winner 6',()=>{
    expect(functions.game(7,17)).toBe(6);
})
test('n=0 & k=0 winner none',()=>{
    expect(functions.game(0,0)).toBeUndefined();
})

const game = require('./logic');
test('Children 5 k=2 winner 3',()=>{
    expect(game.findWinner(5,2)).toBe(3);
})
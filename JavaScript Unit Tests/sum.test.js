const sum = require('./sum')

test('add two numbers', async () => { 
    expect(sum(1,2)).toBe(3)
 })
 
const isPalindrome = require('./isPalindrome')

test('check isPalindrome returns true', () => { 
expect(isPalindrome("assa")).toBe(true)

 })

 test('check isPalindrome returns false', () => { 
    expect(isPalindrome("dev")).toBe(false)
    
     })
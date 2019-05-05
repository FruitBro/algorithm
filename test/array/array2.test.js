// import gcd from '../../code/array/array2'

// test('gcd', () => {
//     expect(gcd(6, 9)).toBe(3)
//     expect(gcd(2, 8)).toBe(2)
//     expect(gcd(2, 3)).toBe(1)
// })

import card from '../../code/array/array2'

test('card', () => {
    expect(card([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true)
    expect(card([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false)
})


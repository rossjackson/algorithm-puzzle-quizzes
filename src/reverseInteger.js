/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed
 * 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 *
 * Assume the environment does not allow you to store
 * 64-bit integers (signed or unsigned).
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
   const maxInt = 2 ** 31
   const multiplier = x < 0 ? -1 : 1
   if (x < 0) x *= -1
   const reversed = [...`${x}`].reverse().join('') * multiplier
   return reversed < maxInt && reversed > -maxInt ? reversed : 0
}

console.log(reverse(123), 321)
console.log(reverse(-123), -321)
console.log(reverse(120), 21)

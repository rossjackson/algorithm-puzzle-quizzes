/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
   s = s.trimStart()
   const nums = s.match(/(\+|-?)\d+/)
   if (!nums) return 0
   const numStr = nums[0]
   if (s.indexOf(numStr) > 0) return 0
   const maxInt = 2 ** 31
   const num = numStr * 1
   if (num < maxInt && num >= -maxInt) return num
   if (num >= maxInt) return maxInt - 1
   if (num < -maxInt) return -maxInt
}

console.log(myAtoi('-2147483648'), -2147483648)
console.log(myAtoi('+1'), 1)
console.log(myAtoi(' '), 0)
console.log(myAtoi('3.14159'), 3)
console.log(myAtoi('    -42'), -42)
console.log(myAtoi('words and 987'), 0)
console.log(myAtoi('+-12'), 0)
console.log(myAtoi('-+12'), 0)

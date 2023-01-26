// https://leetcode.com/problems/palindrome-number/

/**
 * Given an integer x, return true if x is a 
palindrome
, and false otherwise.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
   if (x < 0) return false
   if (x < 10) return true

   const xStr = x.toString()
   const numLength = xStr.length

   if (numLength === 2) return xStr[0] === xStr[1]

   const even = numLength % 2 === 0
   const mid = Math.ceil(numLength / 2)
   let left = even ? mid - 1 : mid - 2
   let right = mid
   let toReturn = true
   while (left !== -1) {
      if (xStr[left] === xStr[right]) {
         left--
         right++
      } else {
         left = -1
         toReturn = false
      }
   }
   return toReturn
}

console.log(isPalindrome(100) === false)
console.log(isPalindrome(-10) === false)
console.log(isPalindrome(1221) === true)
console.log(isPalindrome(10) === false)
console.log(isPalindrome(121) === true)
console.log(isPalindrome(22) === true)
console.log(isPalindrome(2) === true)

// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
   if (!s) return ''
   if (s.length == 1) return s
   let longest = ''
   for (let i = 0; i < s.length; i++) {
      // palindrome can center around 1 or 2 letters
      const evenPal = findLongestPalindrome(s, i, i)
      const oddPal = findLongestPalindrome(s, i, i + 1)
      const longerPalindrome = evenPal.length > oddPal.length ? evenPal : oddPal
      if (longerPalindrome.length > longest.length) {
         longest = longerPalindrome
      }
   }
   return longest
}

const findLongestPalindrome = (str, leftPos, rightPos) => {
   while (leftPos >= 0 && rightPos < str.length && str[leftPos] === str[rightPos]) {
      leftPos--
      rightPos++
   }
   // slice the qualified substring from the second last iteration
   return str.slice(leftPos + 1, rightPos)
}

console.log(longestPalindrome('babad') === 'bab')
console.log(longestPalindrome('cbbd') === 'bb')
console.log(longestPalindrome('ac') === 'a')
console.log(longestPalindrome('aacabdkacaa') === 'aca')

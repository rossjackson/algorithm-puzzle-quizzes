// https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2694302/js-98-sliding-window-with-exlanation/?languageTags=javascript

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
   //    const sortedStr = new Set(s.split(''))
   //    let toReturn = []
   //    let lastChar = ''
   //    for (let idx = 0; idx < sortedStr.length; idx++) {
   //       const currentChar = sortedStr[idx]
   //       if (lastChar !== currentChar) {
   //          toReturn.push(currentChar)
   //          lastChar = currentChar
   //       }
   //    }

   //    return toReturn.length
   //    let set = new Set()
   //    let left = 0
   //    let maxSize = 0

   //    if (s.length === 0) return 0
   //    if (s.length === 1) return 1

   //    for (let i = 0; i < s.length; i++) {
   //       const currentChar = s[i]
   //       while (set.has(currentChar)) {
   //          set.delete(s[left])
   //          left++
   //       }
   //       set.add(currentChar)
   //       maxSize = Math.max(maxSize, i - left + 1)
   //    }
   //    return maxSize

   if (s.length < 2) return s.length
   const sArr = s.split('')
   let maxSize = 0
   let toReturn = []
   for (let idx = 0; idx < sArr.length; idx++) {
      const currentChar = sArr[idx]
      const currentCharIdx = toReturn.indexOf(currentChar)
      if (currentCharIdx !== -1) {
         toReturn = toReturn.slice(currentCharIdx + 1)
      }
      toReturn.push(currentChar)
      if (maxSize < toReturn.length) maxSize = toReturn.length
   }
   return maxSize
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('dvdf'))

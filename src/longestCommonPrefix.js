// https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
   if (strs.length === 1) return strs[0]

   const [firstStr, ...rest] = strs
   let toReturnLCP = firstStr
   for (let idx = 0; idx < rest.length; idx++) {
      if (toReturnLCP === rest[idx]) {
         toReturnLCP = rest[idx]
         continue
      }

      const longestStr = toReturnLCP.length > rest[idx].length ? toReturnLCP : rest[idx]
      const shortestStr = toReturnLCP.length > rest[idx].length ? rest[idx] : toReturnLCP
      const lcp = getLCP(longestStr, shortestStr)
      if (!lcp) {
         return ''
      }

      toReturnLCP = lcp
   }
   return toReturnLCP
}

const getLCP = (longestStr, shortestStr) => {
   if (shortestStr.length === 0) return ''
   return longestStr.indexOf(shortestStr) === 0
      ? shortestStr
      : getLCP(longestStr, shortestStr.substring(0, shortestStr.length - 1))
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl')
console.log(longestCommonPrefix(['dog', 'racecar', 'car']), '')

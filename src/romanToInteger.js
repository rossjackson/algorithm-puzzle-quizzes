// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
   let toReturn = 0
   while (s.length !== 0) {
      const romanVal2 = romanRef[s.substring(0, 2)]
      toReturn += romanVal2 ? romanVal2 : romanRef[s.charAt(0)]

      s = s.substring(romanVal2 && s.length > 1 ? 2 : 1)
   }
   return toReturn
}

const romanRef = {
   M: 1000,
   CM: 900,
   D: 500,
   CD: 400,
   C: 100,
   XC: 90,
   L: 50,
   XL: 40,
   X: 10,
   IX: 9,
   V: 5,
   IV: 4,
   I: 1,
}

console.log(romanToInt('III'), 3)
console.log(romanToInt('LVIII'), 58)
console.log(romanToInt('MCMXCIV'), 1994)

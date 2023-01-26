// https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
   // while loop until its done
   let toReturn = ''
   while (num !== 0) {
      if (num >= 1000) {
         toReturn += 'M'
         num -= 1000
         continue
      }

      if (num >= 900) {
         toReturn += 'CM'
         num -= 900
         continue
      }

      if (num >= 500) {
         toReturn += 'D'
         num -= 500
         continue
      }

      if (num >= 400) {
         toReturn += 'CD'
         num -= 400
         continue
      }

      if (num >= 100) {
         toReturn += 'C'
         num -= 100
         continue
      }

      if (num >= 90) {
         toReturn += 'XC'
         num -= 90
         continue
      }

      if (num >= 50) {
         toReturn += 'L'
         num -= 50
         continue
      }

      if (num >= 40) {
         toReturn += 'XL'
         num -= 40
         continue
      }

      if (num >= 10) {
         toReturn += 'X'
         num -= 10
         continue
      }

      if (num >= 9) {
         toReturn += 'IX'
         num -= 9
         continue
      }

      if (num >= 5) {
         toReturn += 'V'
         num -= 5
         continue
      }

      if (num >= 4) {
         toReturn += 'IV'
         num -= 4
         continue
      }

      if (num >= 1) {
         toReturn += 'I'
         num -= 1
         continue
      }
   }
   return toReturn
}

console.log(intToRoman(1000), 'M')
console.log(intToRoman(1994), 'MCMXCIV')
console.log(intToRoman(3), 'III')
console.log(intToRoman(58), 'LVIII')

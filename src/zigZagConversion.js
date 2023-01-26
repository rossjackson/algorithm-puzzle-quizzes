/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
   if (numRows === 1) return s

   const sArr = s.split('')
   const totalCharsInSection = 2 * numRows - 2
   const totalSections = Math.ceil(sArr.length / totalCharsInSection)
   let toReturn = ''
   for (let idx = 0; idx < numRows; idx++) {
      let cursor = idx
      for (let sectionIdx = 0; sectionIdx < totalSections; sectionIdx++) {
         const currentChar = sArr[cursor]
         if (!currentChar) break
         toReturn += currentChar

         if (idx !== 0 && idx !== numRows - 1) {
            const key = cursor - idx + totalCharsInSection - idx
            const endChar = sArr[key]
            if (endChar) toReturn += endChar
         }

         cursor += totalCharsInSection
      }
   }
   return toReturn
}

console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR')
console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI')
console.log(convert('A', 1) === 'A')

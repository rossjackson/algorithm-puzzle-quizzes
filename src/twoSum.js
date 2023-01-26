/**
 * https://leetcode.com/problems/two-sum/
 */

const twoSum = function (nums, target) {
   const toReturn = []
   for (var idx = 0; idx < nums.length; idx++) {
      const addend = target - nums[idx]
      const addendIdx = nums.filter((_currNum, currIdx) => currIdx !== idx).indexOf(addend)
      if (addendIdx > -1) {
         const second = addendIdx > idx || addendIdx === idx ? addendIdx + 1 : addendIdx
         toReturn[0] = idx
         toReturn[1] = second
         break
      }
   }
   return toReturn
}

// better solution:
const twoSumBetter = function (nums, target) {
   const currentObj = {}

   for (let idx = 0; idx < nums.length; idx++) {
      const addend = target - nums[idx]

      if (currentObj[addend] !== undefined) {
         return [idx, currentObj[addend]]
      }

      currentObj[nums[idx]] = idx
   }

   // const currentMap = new Map()

   // for (let idx = 0; idx < nums.length; idx ++) {
   //     const addend = target - nums[idx]

   //     if(currentMap.has(addend)) {
   //         return [idx, currentMap.get(addend)]
   //     }

   //     currentMap.set(nums[idx], idx)
   // }
}

console.log(twoSumBetter([2, 7, 11, 15], 9))
console.log(twoSumBetter([3, 2, 4], 6))
console.log(twoSumBetter([3, 3], 6))

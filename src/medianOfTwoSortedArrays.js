// https://leetcode.com/problems/median-of-two-sorted-arrays/

const mergeTwoArraysInOrder = (nums1, nums2) => {
   var merged = []
   var i = 0
   var j = 0
   while (i < nums1.length || j < nums2.length) {
      if (i === nums1.length) {
         merged.push(nums2[j])
         j++
      } else if (j === nums2.length || nums1[i] < nums2[j]) {
         merged.push(nums1[i])
         i++
      } else {
         merged.push(nums2[j])
         j++
      }
   }
   return merged
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
   //    const combinedSorted = [...nums1, ...nums2].sort((a, b) => a - b)
   const combinedSorted = mergeTwoArraysInOrder(nums1, nums2)

   const middleCount = Math.floor(combinedSorted.length / 2)
   if (combinedSorted.length % 2 === 0) {
      return (combinedSorted[middleCount - 1] + combinedSorted[middleCount]) / 2
   }

   return combinedSorted[middleCount]
}

console.log(findMedianSortedArrays([1, 3], [2]), 2)
console.log(findMedianSortedArrays([1, 2], [3, 4]), 2.5)
console.log(findMedianSortedArrays([3], [-2, -1]), -1)

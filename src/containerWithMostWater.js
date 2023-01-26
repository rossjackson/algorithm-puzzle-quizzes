// https://leetcode.com/problems/container-with-most-water/

/**
 * You are given an integer array height of length n. 
 * There are n vertical lines drawn such that the two endpoints 
 * of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
   // Move from end to end.  Move the pointer closer if you have the shortest stick between the two

   let leftPointer = 0
   let rightPointer = height.length - 1
   let maxArea = 0

   while (leftPointer < rightPointer) {
      maxArea = Math.max(
         maxArea,
         Math.min(height[leftPointer], height[rightPointer]) * (rightPointer - leftPointer)
      )
      if (height[leftPointer] <= height[rightPointer]) {
         leftPointer++
      } else {
         rightPointer--
      }
   }

   return maxArea
}

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]), 17)
console.log(maxArea([1, 1]), 1)
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49)

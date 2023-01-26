/**
 * https://leetcode.com/problems/add-two-numbers/description/
 */

function ListNode(val, next) {
   this.val = val === undefined ? 0 : val
   this.next = next === undefined ? null : next
}

const addTwoNumbers = (l1, l2) => {
   let carry = 0
   let resultNode = new ListNode()
   let tempNode = resultNode

   while (l1 || l2) {
      let sum = carry
      if (l1) {
         sum += l1.val
         l1 = l1.next
      }

      if (l2) {
         sum += l2.val
         l2 = l2.next
      }

      tempNode.next = new ListNode(sum % 10)
      tempNode = tempNode.next
      carry = sum > 9 ? 1 : 0
   }

   if (carry > 0) {
      tempNode.next = new ListNode(carry)
   }

   return resultNode.next
}

console.log(
   addTwoNumbers(
      new ListNode(2, new ListNode(4, new ListNode(3))),
      new ListNode(5, new ListNode(6, new ListNode(4)))
   )
)
console.log(addTwoNumbers(new ListNode(0), new ListNode(0)))
console.log(
   addTwoNumbers(
      new ListNode(
         9,
         new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))
      ),
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
   )
)

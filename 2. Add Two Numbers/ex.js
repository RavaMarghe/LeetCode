class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1, l2) {
  const result = new ListNode();

  let curr = result;
  let carry = 0;

  while (l1 || l2) {
    const a = l1 && l1.val;
    const b = l2 && l2.val;
    const sum = a + b + carry;

    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);

    curr = curr.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;

    console.log("a:", a);
    console.log("b:", b);
  }

  if (carry) {
    curr.next = new ListNode(carry);
  }

  return result.next;
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

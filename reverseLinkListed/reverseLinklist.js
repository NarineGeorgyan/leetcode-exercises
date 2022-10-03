var reverseList = function (head) {
  let prev = null;
  let next = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};
reverseList([1, 2, 3, 4, 5]);

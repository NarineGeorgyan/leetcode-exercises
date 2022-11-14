function ListNode(val) {
  this.val = val;
  this.next = null;
}

let arr = [3, 2, 0, 4, 5, 6];
let linkList = new ListNode();
let node = linkList;
let k = null;
let ptr = linkList;
let head = null;
let index = 0;
for (let i = 0; i < arr.length; i++) {
  node.val = arr[i];
  node.next = new ListNode();
  node = node.next;
}
k = linkList;
console.log(k);
while (k) {
  //   if (k.next.val === 2) {
  //     k.next = k.next.next;
  //   }
  k = k.next;
  index++;
}

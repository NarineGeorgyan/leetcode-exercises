const head = [1, 2, 3, 4, 5];

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(data) {
    const node = { data, next: null };
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }
}
const list = new LinkedList();

for (let i = 0; i < head.length; i++) {
  list.append(head[i]);
}
var reverseList = function (list) {
  while (list.head != null) {
    console.log(list.head.next);
    //   console.log(list.head.next);
    //   console.log(list.head.next.next);
    //   console.log(list.head.next.next.next);
    //   console.log(list.head.next.next.next.next);
  }
};
reverseList(list);

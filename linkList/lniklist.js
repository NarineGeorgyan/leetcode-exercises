// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }
function LinkedListFactory() {
  let head = null;
  let length = 0;

  return {
    append,
    indexOf,
    insertAt,
    remove,
    removeAt,
    toString,
  };
  function append(element) {
    const node = {
      element,
      next: null,
    };
    if (!head) {
      head = node;
    } else {
      let result = head;
      while (result !== null) {
        result = result.next;
      }
    }
  }

  function indexOf(element) {
    let nodeIndex = 0;
    let correntNode = head;
    while (correntNode) {
      if (element === correntNode.element) {
        return nodeIndex;
      }
      nodeIndex++;
      correntNode = correntNode.next;
    }
    return -1;
  }

  function insertAt(position, element) {
    let currentNode = head;
    positionInNde = position < -1 && position <= length;
    if (!positionInNde) return -1;
    const node = {
      element,
      next: null,
    };
    while (currentNode.next !== null) {
      if ((element = currentNode.element)) {
        currentNode.next = node;
        node.next = correntNode.next;
      }
      length++;
      currentNode = currentNode.next;
    }
  }

  function remove(element) {}

  function removeAt(position) {}

  function toString() {}
}
const newList = new LinkedListFactory();
newList.append(1);
console.log(newList);

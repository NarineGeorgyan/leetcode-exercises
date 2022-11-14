    function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    }
        let linkList = new ListNode();
        let node = linkList;

        let arr = [1, 1, 2, 2, 2, 3, 3];
        for (let item of arr) {
        node.val = item;
        node.next = new ListNode();
        node = node.next;
        }
    if (linkList.val === linkList.next.val) {
    linkList = linkList.next;
    }

    let k = linkList;

    // while (k && k.next) {
    //   if (k.next.val === k.next.val) {
    //     //     k.next = k.next.next;
    //     let tmp = k.next;
    //     k.next = tmp.next;
    //     tmp.next = null;
    //   }
    //   k = k.next;
    // }

    let set = new Set();
    while(k && k.next){
        set.add(k.val);
        k=k.next;
    }
    console.log(set)
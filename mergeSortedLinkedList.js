/*
//  @param {ListNode} list1
//  @param {ListNode} list2
//  @return {ListNode}

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/
const ListNode = (val, next) => {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

const mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  let head = null;
  let pointer = null;
  let pointer1 = list1;
  let pointer2 = list2;
  while (pointer1 !== null || pointer2 !== null) {
    let value = null;
    if (pointer1 !== null && pointer2 !== null) {
      if (pointer1.val < pointer2.val) {
        value = pointer1.val;
        pointer1 = pointer1.next;
      } else {
        value = pointer2.val;
        pointer2 = pointer2.next;
      }
    } else if (pointer2 !== null) {
      value = pointer2.val;
      pointer2 = pointer2.next;
    } else if (pointer1 !== null) {
      value = pointer1.val;
      pointer1 = pointer1.next;
    }
    if (!head) {
      head = new ListNode(value);
      pointer = head;
    } else {
      pointer.next = new ListNode(value);
      pointer = pointer.next;
    }
  }

  return head;
};

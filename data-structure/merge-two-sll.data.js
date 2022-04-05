// You are given the heads of two sorted linked lists list1 and list2.
//
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
//
// Return the head of the merged linked list.

const { SinglyLinkedList, Node } = require('./singly-linked-list.data');
const { bubbleSort } = require('../sorting/bubble.sort');

function merge(list1, list2) {
  const result1 = [];
  const result2 = [];
  let current = list1.head;
  while(current) {
    result1.push(current.value);
    current = current.next;
  }
  current = list2.head;
  while(current) {
    result2.push(current.value);
    current = current.next;
  }
  const nodes = [...result1, ...result2];
  bubbleSort(nodes);

  const item = new SinglyLinkedList();

  for(let i = 0; i < nodes.length; i++) {
    const node = new Node(nodes[i]);
    if(!item.head) {
      item.head = node;
      item.tail = node;
    } else {
      item.tail.next = node;
      item.tail = node;
    }

    item.length += 1;
  }
  return item
}
const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(4);
const list2 = new SinglyLinkedList();
list2.push(1);
list2.push(3);
list2.push(4);

const test = merge(list,list2);
test.traverse();
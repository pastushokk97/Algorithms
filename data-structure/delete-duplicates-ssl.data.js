//Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

const { SinglyLinkedList } = require('./singly-linked-list.data');
const { bubbleSort } = require('../sorting/bubble.sort');

function deleteDuplicates(list) {
  let current = list.head;
  const data = [];
  let index = 0;
  while(current) {
    const node = list.get(index);
    data.push(node.value);
    index++;
    current = current.next;
  }
  const unique = [...new Set(data)];
  bubbleSort(unique);
  const newList = new SinglyLinkedList();

  for(let i = 0; i < unique.length; i++) {
    newList.push(unique[i]);
  }
  return newList;
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(1);
console.log(deleteDuplicates(list));


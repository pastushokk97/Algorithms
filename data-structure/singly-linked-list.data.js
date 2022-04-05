class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
    return this;
  }

  traverse() {
    let current = this.head;
    while(current) {
      console.log(current);
      current = current.next;
    }
  }

  pop() {
    if(!this.head) return;
    let current = this.head;
    let temp = current;
    while(current.next) {
      temp = current;
      current = current.next;
    }
    this.tail = temp;
    this.tail.next = null;
    this.length--;

    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if(!this.head) return;

    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if(index < 0 || index > this.length - 1) return null;

    let foundIndex = this.head;
    let counter = 0;

    while(counter !== index) {
      foundIndex = foundIndex.next;
      counter++;
    }

    return foundIndex;
  }

  set(index, value) {
    const node = this.get(index);

    if(!node) return false;

    node.value = value;

    return true;
  }

  insert(index, value) {
    if(index < 0 || index > this.length) return false;

    if(index === 0) {
      this.unshift(value);
      return true;
    }

    if(index === this.length) {
      this.push(value);
      return true;
    }
    const node = new Node(value);
    const foundNode = this.get(index - 1);
    let temp = foundNode.next;
    foundNode.next = node;
    node.next = temp;
    this.length++;

    return true;
  }

  remove(index) {
    if(index < 0 || index > this.length) return;

    if(index === 0) {
      return this.shift();
    }

    if(index === this.length - 1) {
      return this.pop();
    }
    const foundNode = this.get(index - 1);
    const removed = foundNode.next;
    foundNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let swamp = this.head;
    this.head = this.tail;
    this.tail = swamp;
    let prev = null;
    let next;
    let count = this.length;
    while(count) {
      next = swamp.next;
      swamp.next = prev;
      prev = swamp;
      swamp = next;
      count--;
    }

    return this;
  }
}

module.exports.SinglyLinkedList = SinglyLinkedList;
module.exports.Node = Node;

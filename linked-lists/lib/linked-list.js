'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // Big 0: 0 (1)
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  // Big-0: 0(n)=0(1)
  find(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }

    if (this.head.value === value) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // Big-0: 0(n) = 0(1)
  deleteItem(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }
    if (this.head.value === value) {
      this.head.next = this.head;
      return this.head;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
};

class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
class LinkedList {
  // index starts from 0
  // position starts from 1

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Create
  prepand(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
  }

  insert(position, value) {
    if (position === 1) {
      this.prepend(value);
    } else if (position >= this.length) {
      this.append(value);
    } else {
      const newNode = new Node(value);
      const leader = this.traverseToIndex(position - 1);
      const nextNode = leader.next;

      leader.next = newNode;
      newNode.next = nextNode;
      this.length++;
    }
  }
    
  // Read
  traverseToIndex(index) {
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  printList() {
    const list = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return list;
  }

  // Update
  update(position, value) {
    const target = this.traverseToIndex(position - 1);
    target.value = value
  }

  // Delete    
  remove(position) {
    if (position === 1) {
      this.head = this.head.next;
      this.length--;
    } else {
      const leader = this.traverseToIndex(position - 1);
      const unwantedNode = leader.next;

      leader.next = unwantedNode.next;
      this.length--;
    }
  }
}

module.exports = LinkedList;

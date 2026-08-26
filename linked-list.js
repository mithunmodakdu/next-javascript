// ::: 3-6 Linked List Implementation - Basic concept of Node :::

// class Node {
//   constructor(value) {
//     this.value = value,
//     this.next = null
//   }
// }

// const head = new Node(10)
// head.next = new Node(20)
// head.next.next = new Node(30)
// console.log(head)

// let temp = head;

// while(temp !== null){
//   console.log(temp.value, " ")
//   temp = temp.next;
// }


// ::: 3-7 Linked List Implementation - append() and print() :::

class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value){

    const newNode = new Node(value);

    // if linked list is empty
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }else{
      // if linked list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value){
    const newNode = new Node(value);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insert(index, value){
    if(index < 0 || index > this.length){
      console.error("Index is out of boundary")
      return undefined;
    }

    // if the insert is in the start of linked list
    if(index === 0){
      return this.prepend(value);
    }

    // if the insert is in the end of linked list
    if(index === this.length){
      return this.append(value);
    }

    // if the insert is in the middle of linked list
    // 1. find the leading node (previous node of given index)
    let count = 0;
    let leadingNode = this.head;

    while(count !== index -1){
      leadingNode = leadingNode.next;
      count++;
    }
    console.log(leadingNode)

  }

  remove(){}

  print(){
    const arr = [];
    let currentNode = this.head;

    while(currentNode !== null){
      arr.push(currentNode.value)
      currentNode = currentNode.next;
    }

    console.log(arr.join(" --> "), "--> null")
  }
}


const myLinkedList = new LinkedList();
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);

myLinkedList.prepend(10); //index 2
myLinkedList.prepend(20); //index 1
myLinkedList.prepend(30); //index 0

myLinkedList.insert(2, 15)

myLinkedList.print();

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

  insert(){}

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

myLinkedList.print();

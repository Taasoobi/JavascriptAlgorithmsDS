/**
 * 
 * 
 */

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){ // if this.head = null, at the beginning it is null.
            this.head = newNode;
            this.tail = this.head;
            //this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
 
    traverse(){
        let current = this.head;
        while(current){ //while current is not null it will return true
            console.log(current.val);
            current = current.next;
        }
    }
}

/*
let first = new Node("Hi");
first.next = new Node("There");
first.next.next = new Node("Bro");

console.log(first);*/

let list = new SinglyLinkedList();
console.log(list);
list.push('hi');
console.log(list);
list.push('you');
console.log(list);
list.push(99);
console.log(list);
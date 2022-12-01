/** 
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 https://kalkicode.com/data-structure/single-linked-list-visualization
 */
 class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * SLL(Singly Linked List) 
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
  constructor() {
    this.head = null;
  }

  // -------------- W1D2 -----------------
  /**
   * Determines if this list is empty.
   * @returns {boolean}
   */
  isEmpty() {
    if (this.head !== null) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    // Create a new node with the given value 
    // inserts it at the back of the list
    var newNode = new ListNode(data);
    // HINT: How to find the last node of a Singly Linked List?
    var runner = this.head
    while (runner !== null) {
      if (runner.next == null) {
        runner.next = newNode;
        return this
      }
      runner = runner.next;

    }
    // level 1: insert a new node into list1
    // level 2: insert a new node into emptyList
  }


  insertAtBack2(data) {
    // Create a new node with the given value 
    // inserts it at the back of the list
    var newNode = new ListNode(data);
    
    if(this.isEmpty()){
      runner.head = newNode;
      return this
    }
    // HINT: How to find the last node of a Singly Linked List?
    var runner = this.head
    while (!runner.next) {
      runner = runner.next;
    }
    runner.next = newNode;
    return this
  }
  

  //  ** BONUS: 
  //  * Calls insertAtBack on each item of the given array.
  //  * - Time: O(n * m) n = list length, m = arr.length.
  //  * - Space: O(1) constant.
  //  * @param {Array<any>} vals The data for each new node.
  //  * @returns {SinglyLinkedList} This list.
  // */
  insertAtBackMany(arr) {
    for (const element of arr) {
      this.insertAtBack(element);
    }
    return this;
  }

  // -------------- W1D3 -----------------
  insertAtFront(data) {
    // instantiate the ListNode with data
    // pointer of the newNode to the original head
    // reassign the head
    var newNode = new ListNode(data)
    newNode.next = this.head
    this.head = newNode
    // edge case: how do we handle an empty list - can be solved by the above
  }

  /**
   * Removes the first node of this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    if(!this.head){
      return null;
    }
    var oldHead = this.head;
    this.head = this.head.next;
    return oldHead.data;
  }

 // --------------W1D4----------------
    /**
   * Determines whether or not the given search value exists in this list.
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
  contains(data) {
    var runner = this.head;
    while (runner) {
      if (runner.data == data) {
        return true;
      }
      console.log(runner.data);
      runner = runner.next;
    }
    return false;
  }

  /**
   * Removes the last node of this list.
   * @returns {any} The data from the node that was removed.
   */
  removeBack() {
    var runner = this.head;
    if(!this.head){
      return null;
    }
    if(!this.head.next){
      var data = this.head.data
      this.head = null
      return data
    }
        //stops at second to last
    while (runner.next.next) {
      runner = runner.next;
    }
    //gets data from last
    var data = runner.next.data;
    //points away from last
    runner.next = null;
    return data;
  }



/**
 * Determines whether or not the given search value exists in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The data to search for in the nodes of this list.
 * @param {?ListNode} current The current node during the traversal of this list
 *    or null when the end of the list has been reached.
 * @returns {boolean}
 */
  containsRecursive(val, current) {
    if (current.data == val){
      return true;
    }
    else if (current.next){
      return this.containsRecursive(val, current.next);
    }
    else{
      return false;
    }
  }

// EXTRA
/**
 * Recursively finds the maximum integer data of the nodes in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {ListNode} runner The start or current node during traversal, or null
 *    when the end of the list is reached.
 * @param {ListNode} maxNode Keeps track of the node that contains the current
 *    max integer as it's data.
 * @returns {?number} The max int or null if none.
 */
  recursiveMax(runner, maxNode) {
    if (runner.data > maxNode){
        maxNode = runner.data;
    }
    
    if (runner.next){
      return this.recursiveMax(runner.next, maxNode)
    }

    else{
      return maxNode;
    }
  }


  
  //given
  printList() {
    // if the list is empty?
    if (this.head === null) {
      console.log("this is an empty list")
      return this
    }
    // how to traverse through different nodes?
    // while-loop (as long as the node.next is not null)
    var runner = this.head
    while (runner !== null) {
      console.log(runner.data)
      runner = runner.next
    }
     return this    

    // Can I chain all the methods?

  }
}

// instantiate nodes
var node1 = new ListNode(3)
var node2 = new ListNode(5)
var node3 = new ListNode(8)

node1.next = node2 // .next points to another node (not data)
node2.next = node3

// create empty list
var emptyList = new SLL();
// Head: NULL

var list1 = new SLL();
// head: (3) -> (5) -> (8) -> NULL
list1.head = node1;
// list1.insertAtBack(8)

// emptyList.printList()
// list1.printList()


list1.insertAtBack(10).insertAtBack(11).printList()
// the above code will need chaining
// emptyList.insertAtBack(10).insertAtBack(11).printList()









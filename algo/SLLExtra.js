// class Node 
class ListNode{
    constructor(data){
      this.data = data;
      this.next = null;
    }  
  }
  
  // class SLL - Singly Linked List
  class SLL{
    constructor(){
      this.head = null;
    }
  
    insertAtBack(data){
      var newNode = new ListNode(data);
      if(this.head){
        var runner = this.head;
        while(runner.next){
          runner = runner.next;
        }
        runner.next = newNode;
      }else{
        this.head = newNode;
      }
    }
    //given
    printList(){
      if(!this.head){
        console.log("Empty list");
        return
      }
      var runner = this.head;
      while(runner){
        console.log(runner.data);
        runner = runner.next;
      }
    }
    /**
     * Retrieves the data from the nthLast node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} nthLast Indicates the position from the back of the list.
     * @returns {any}
     */
    nthToLast(nthLast) {}
  
    /**
     * Determines whether the list has a loop in it which would result in
     * infinitely traversing unless otherwise avoided. A loop is when a node's
     * next points to a node that is behind it.
     * - Time: (?).
     * - Space: (?).
     * @returns {boolean} Whether the list has a loop or not.
     */
    hasLoop() {}
    
    /**
     * Determines if the node's data of this list forms a palindrome.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this list is a palindrome.
     */
    isPalindrome() {}
  
    /**
     * Determines if a given node in this list is in the left half of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node
     * @returns {boolean}
     */
    isNodeInLeftHalf(node) {}
  
  }
  
  
  var list1 = new SLL();
  
  var list2 = new SLL();
  list2.insertAtBack(5);
  list2.insertAtBack(6);
  list2.insertAtBack(7);
  list2.insertAtBack(8);
  //       HEAD
  // list2: (1) --> (2) --> (3) --> null
  
  
  list1.printList();
  list2.printList();
  
  
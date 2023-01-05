class Node{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}
class Stack{
  constructor(){
    this.top=null;
  }

  isEmpty(){
    return this.top === null
  }

    /**
   * Adds a new given item based on the to the top of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top.
   * @returns {number} .
   */
  push(newNode){
    newNode.next = this.top
    this.top = newNode
  }

  
  /**
   * Removes the top / last item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed item or undefined if this stack was empty.
   */
  pop(){
    if(this.isEmpty())return null;
    var oldTop = this.top
    this.top = this.top.next
    return oldTop
    
  }

    /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The top / last item of this stack.
   */
  peek(){
    if(this.isEmpty())return null;
    return this.top.data
  }


  /**
   * Returns the size of this stack.
   * DO NOT USE .next
   * @returns {number} The length.
   */
  size(){
    let tempStack = new Stack();
    let count = 0;

    //while this.top exists
    while (this.top){
      count++;
      let node = this.pop(); 
      tempStack.push(node);
    }

    //while temp.top exists
    while (tempStack.top){
      this.push(tempStack.pop());
    }
    return count; 
  }

  printStack(){ // For learning purpose
    console.log("TOP")
    let runner = this.top;
    while(runner){
      console.log(runner.data);
      runner= runner.next
    }
  }
}


/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue{
	constructor(){
		this.front = null;
		this.rear = null;

	}

    /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
	isEmpty(){
    return this.front === null
	}

    /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
	getFront(){
		if(!this.front) return null
    return this.front
	}

    /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
	enqueue(newNode){
    if(!this.rear){
      this.front = newNode
      this.rear = newNode
    }else{
      this.rear.next = newNode
      this.rear = newNode
    }
	}

  
  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
	dequeue(){
    if(!this.front)return
    this.front = this.front.next
	}

  // bonus
    /**
   * Check if the target value exists in the queue using the basic queue operations
   * @returns {Boolean } 
   */
  contains(targetVal) {
    var q2 = new Queue();
    var foundVal = false;

    while (this.front) {
      if (this.front.data == targetVal) {
        foundVal = true;
      }
      q2.enqueue(this.dequeue());
    }

    while (q2.front) {
      this.enqueue(q2.dequeue());
    }
    return foundVal;
  }


  	printQueue(){ //for learning puspose
		console.log("Front: " + this.front.data);
		var runner = this.front;
		while(runner){
			console.log(runner.data)
			runner= runner.next;
		}
		console.log("Rear: " +this.rear.data);
	}
}


  /**
   * Compares 2 queues to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q1 q2 The queues to be compared 
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
function compareQueue(q1, q2){
  var q3 = new Queue();
  var q4 = new Queue();
  var isMatched = true;
  while(!q1.isEmpty() && !q2.isEmpty()){
    var item1 = q1.dequeue();
    var item2 = q2.dequeue();
    if(item1.data !== item2.data){
      isMatched = false
    }
    q3.enqueue(item1);
    q4.enqueue(item2);
  }

  if(q1.isEmpty() && !q2.isEmpty()){ // q2 is longer
    isMatched = false;
    while(!q2.isEmpty()){
      q4.enqueue(q2.deueue());
    }
  }

  if(!q1.isEmpty() && q2.isEmpty()){ // q1 is longer
    isMatched = false;
    while(!q1.isEmpty()){
      q3.enqueue(q1.deueue());
    }
  }
  

  while(!q3.isEmpty()){
    q1.enqueue(q3.dequeue())
  }

  while(!q4.isEmpty()){
    q2.enqueue(q4.dequeue())
  }
  return isMatched;
  
	}

  /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
function isPalindrome(q){ 
  var isPalindrome= true
  var tempQ = new Queue()
  var tempStack = new Stack()

  while(!q.isEmpty()){
    var item = q.dequeue()
    tempQ.enqueue(item)
    tempStack.push(item)
  }

  while(!tempQ.isEmpty()){
    var item1 = tempQ.dequeue()
    var item2 = tempStack.pop()
    if(item1.data !== item2.data){
      isPalindrome = false
    }
    q.enqueue(item1)
  }
  return isPalindrome;
	}

var test1 = new Queue();
test1.enqueue(new Node("a"));
test1.enqueue(new Node("b"));
test1.enqueue(new Node("c"));
test1.enqueue(new Node("d"));
test1.printQueue();


var test2 = new Queue();
test2.enqueue(new Node("a"));
test2.enqueue(new Node("b"));
test2.enqueue(new Node("c"));
test2.enqueue(new Node("d"));

var test3 = new Queue();
test3.enqueue(new Node("a"));
test3.enqueue(new Node("b"));
test3.enqueue(new Node("b"));
test3.enqueue(new Node("a"));



console.log(compareQueue(test1, test2)) // expected: true
console.log(compareQueue(test1, test3)) // expected: false

console.log(isPalindrome(test3)); // expected : true
console.log(isPalindrome(test2)); // expected : false
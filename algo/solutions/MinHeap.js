/**
 * Ref: https://www.cs.usfca.edu/~galles/visualization/Heap.html
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
      /**
       * 0th index not used, so null is a placeholder. 
       * Not using 0th index makes calculating the left and right
       * children's index cleaner.
       * This also effectively makes our array start at index 1.
       */
      this.heap = [null];
    }
  
    /**
     * Retrieves the size of the heap, ignoring the null placeholder.
     * @returns {?number} Null if empty.
     */
    size() {
      // - 1 since 0 index is unused
      return this.heap.length - 1
    }
  
    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
      if(this.heap[1]){
        return this.heap[1]
      }
      return null
    }
  
    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than its parent.
     *   parent : Math.floor(i/2)
     *   left child: i*2   | right child: i*2+1
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num) {
      this.heap.push(num)
      let numId = this.heap.length - 1
      let parentId = Math.floor(numId / 2)
      while(num < this.heap[parentId]){ 
        // [this.heap[numId], this.heap[parentId]] =  [this.heap[parentId], this.heap[numId]]
        let temp = this.heap[numId]
        this.heap[numId] = this.heap[parentId]
        this.heap[parentId] = temp
        numId = parentId
        parentId = Math.floor(parentId / 2); 
      }
      return this.heap
    }
  
  
  
    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
      if (parentIdx > this.heap.length - 1) {
        return;
      }
  
      spaceCnt += spaceIncr;
      this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
  
      console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
      );
  
      this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
  }
  
  
  var heap = new MinHeap();
  heap.insert(12)
  heap.insert(3)
  heap.insert(2)
  heap.insert(8)
  heap.insert(32)
  heap.insert(24)
  heap.insert(1)
  
  console.log(heap.top())
  console.log(heap.size())
  heap.printHorizontalTree()
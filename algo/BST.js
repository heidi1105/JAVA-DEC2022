/****
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
  * Reference: http://btv.melezinek.cz/binary-search-tree.html
 */
 class BSTNode { // node
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where 
 * the data of left nodes are <= to their parent and
 * the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Determines if this tree is empty.
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {// this.root 
    if (this.root == null) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    if(!this.root)return null
    while (current.left) {
      current = current.left;
    }

    return current.data;
  }


  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
    if(this.isEmpty() == true){
      return "It's empty you silly goose"
    }
    if(current.left){
      return this.minRecursive(current.left)
    }
    else{
      return(current.data)
    }
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {
    while (current.right) {
      current = current.right;
    }

    return current.data;
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    if(this.isEmpty() == true){
      return "It's empty you silly goose"
    }
    if(current.right){
      return this.maxRecursive(current.right)
    }
    else{
      return(current.data)
    }
  }

  // -------------- W2D2 -----------------
    
    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal : The number to search for
     * @returns {boolean} : Indicates if the searchVal was found.
     */
    contains(searchVal) {
      var current = this.root;
      if(this.root == null){
        return null;
      }
      while(current != null){
        if(current.data == searchVal){
          return true;
        }
        if(current.data > searchVal){
          current = current.left;
        }
        else if(current.data < searchVal){
          current = current.right;
        }
      }
        return false;
    }

  
  /**
 * Determines if this tree contains the given searchVal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} searchVal: The number to search for in the node's data.
 * @returns {boolean} : Indicates if the searchVal was found.
 */
  containsRecursive(searchVal, current = this.root) {
    if (!current){ 
    return false;
    }
    if (current.data < searchVal) {
      return this.containsRecursive(searchVal, current.right);
    }
    else if (current.data === searchVal) {
      return true;
    }
    else {
      return this.containsRecursive(searchVal, current.left);
    }
    
  }

  range(){
    if(this.isEmpty())return null;
    return this.max()-this.min();
  }
  // ------------W2D3 --------------
  
  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
  insert(newVal) {
     var runner = this.root
    if(this.root == null)
    {
      this.root = new BSTNode(newVal);
      return this;
    }  
    
    while(runner)
      {
        if(newVal < runner.data)
        {    
          if(runner.left == null) 
          {
            runner.left = new BSTNode(newVal);
            return this
          }          
          else
          {
          runner = runner.left
          }  
        }
        
        else if(newVal > runner.data)
        { 
          if(runner.right == null)
          {
            runner.right = new BSTNode(newVal);
            return this
          }
            
          else
          {
          runner = runner.right
          }
        }
          
        else
        {
          console.log("Value is already in the tree.")
          return false
        }
      }
      
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {BinarySearchTree} This tree.
   */

  insertRecursive(newVal, curr = this.root) {
    if(!curr) {
      this.root = new BSTNode(newVal)
      return this
    }
    if(newVal < curr.data) {
      if(curr.left === null){
        curr.left = new BSTNode(newVal)
          return this
      }
      return this.insertRecursive(newVal, curr.left)
    }else{
      if (curr.right === null) {
        curr.right = new BSTNode(newVal)
        return this
      }
      return this.insertRecursive(newVal, curr.right)  
    }
  }
    

  // HELPER METHOD
  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
      `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.insert(10);
// oneNodeTree.print()

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.insert(10);
twoLevelTree.insert(5);
twoLevelTree.insert(15);
// twoLevelTree.print()

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   4  13  20
*/
const threeLevelTree = new BinarySearchTree();
twoLevelTree.insert(10);
twoLevelTree.insert(5);
twoLevelTree.insert(2);
twoLevelTree.insert(4);
twoLevelTree.insert(15);
twoLevelTree.insert(20);
twoLevelTree.insert(13);

threeLevelTree.print()

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
    // -----------w2d4 -------------
  /**
  * Depth first search
   * DFS Preorder: (CurrNode, Left, Right) 
   * Usage: create a copy of the tree,  
   * Converts this BST into an array following DFS preorder.
   * Example on the fullTree var:
   * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
   * @param {Node} node The current node during the traversal 
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPreorder(curr = this.root, vals = []) {
    if(!curr){
      return;
    }
    if(curr){
      vals.push(curr.data);
      this.toArrPreorder(curr.left, vals);
      this.toArrPreorder(curr.right, vals);
    } 
    return vals;
  }  
  
  /**
   * DFS Inorder: (Left, CurrNode, Right)
   * Usage: get the numbers in order
   * Converts this BST into an array following DFS inorder.
   * Example on the fullTree var:
   * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
   * @param {Node} node The current node during the traversal 
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrInorder(curr = this.root, vals = []) {
    if(!curr){
      return;
    }
    if(curr){
      this.toArrInorder(curr.left, vals);
      vals.push(curr.data);
      this.toArrInorder(curr.right, vals);
    } 
    return vals;
  } 
  /**
   * DFS Postorder (Left, Right, CurrNode)
   * Usage: delete the tree
   * Converts this BST into an array following DFS postorder.
   * Example on the fullTree var:
   * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
   * @param {Node} node The current node during the traversal 
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPostorder(curr = this.root, vals = []) {
        if(!curr){
      return;
    }
    if(curr){
      this.toArrPostorder(curr.left, vals);
      this.toArrPostorder(curr.right, vals);
      vals.push(curr.data);
    } 
    return vals;
  } 
  // ------------ W2D5 --------------
    size(node = this.root, count = 0) {
    if (!node) {
      count += 0;
    }
    if (node) {
      count++;
      count = this.size(node.left, count)
      count = this.size(node.right, count)
    }
    return count;
  }
  
    size2(node = this.root) {
    let count = 0
    if (node == null) {
      return 0
    }
    if (node) {
      count++;
      return count + this.size2(node.left) + this.size2(node.right)
    }
  }
  
  height(node = this.root) {
      if (node === null) {
            return 0;
        }
        if (this.height(node.left) > this.height(node.right)) {
            return (this.height(node.left) + 1)
        }
        else {
            return (this.height(node.right) + 1)
        }
    }

  height2(node = this.root) { 
    if(!node){
      return 0;
    }else {
      var leftHeight = this.height(node.left)
      var rightHeight = this.height(node.right)
      var level = Math.max(leftHeight, rightHeight) +1;
    }
    return level;
  }  
  
  leftCount(current = this.root) {
        let count = 1;      
        if (!current) return null;
        while (current.left != null) {
            current = current.left
            count+=1;
        }
        return count;
    }
    rightCount(current = this.root) {
        let count = 1;      
        if (!current) return null;
        while (current.right != null) {
            current = current.right
            count+=1;
        }
        return count;
    }

  height3(curr = this.root) {
    if(!curr) return null;
    if(this.leftCount() > this.rightCount()){
      return "height is " + this.leftCount();
    } return "height is " + this.rightCount();
  }

  
isFull(node = this.root) {
    // If empty tree
    if (!node) {
      return false;
    }

    // if leaf node, leaf node is the end which means it has no left or right
    if (!node.left && !node.right) {
      return true;
    }

    // if both left and right subtrees are not null and
    // both left and right subtrees are full
    if (node.left && node.right) {
      return this.isFull(node.left) && this.isFull(node.right);
    }
    return false;
  }

  isBalanced(node = this.root) {
    if (!node) {
      return true;
    }

    if (Math.abs(this.height(node.left) - this.height(node.right)) > 1) {
      return false;
    }

    return this.isBalanced(node.left) && this.isBalanced(node.right);
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
  oneNodeTree.insert(10)
  // oneNodeTree.print()
  
  /* twoLevelTree
          root
          10
        /   \
      5     15
  */
  const twoLevelTree = new BinarySearchTree();
  twoLevelTree
    .insert(10)
    .insert(5)
    .insert(15)
  // twoLevelTree.print()
  
  /* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   8  13  20
  */
  const threeLevelTree = new BinarySearchTree();
  threeLevelTree
    .insert(10)
    .insert(5)
    .insert(2)
    .insert(8)
    .insert(15)
    .insert(20)
    .insert(13)

  threeLevelTree.print()
  /* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */
  
  
  const fullTree = new BinarySearchTree();
  fullTree
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(12)
    .insert(18)
    .insert(24)
    .insert(50)
    .insert(35)
    .insert(70)
    .insert(31)
    .insert(44)
    .insert(66)
    .insert(90);

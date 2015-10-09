var RedBlackTree = function(value) {
  var tree = Object.create(treeMethods);

  tree.red = false;
  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.root = true;

  return tree;
};

var treeMethods = {};

treeMethods.insert = function(value){
  var G, P, U;

  G = this;
  
  var insertionHelper = function(){
    if(G !== this){
      if(G.left.value === this.value){
        U = G.right;
      } else {
        U = G.left;
      }
      G = P;
    }
    P = this;

    if(value < this.value){
      if(this.left === null){
        var newTree = RedBlackTree(value);
        newTree.red = true;
        newTree.root = false;
        this.left = newTree;
      } else {
        insertionHelper.call(this.left);
      }
    } else if (value > this.value) {
      if(this.right === null){
        var newTree = RedBlackTree(value);
        newTree.red = true;
        newTree.root = false;
        this.right = newTree;
      } else {
        insertionHelper.call(this.right);
      }
    }
  }

  insertionHelper.call(this);
  debugger;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */

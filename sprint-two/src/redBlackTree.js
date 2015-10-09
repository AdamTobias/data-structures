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

//does my insert method need to return the root, in the case that the root
//changes during the insertion?
treeMethods.insert = function(value){
  var G, P, U;
  
  //there is an underlying assumption in here that insert is only called
  //from the root.  Otherwise the grandparent relationship is inaccurate
  //if the new node is inserted as a direct child of the node that called
  //insert.

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
        return newTree;
      } else {
        insertionHelper.call(this.left);
      }
    } else if (value > this.value) {
      if(this.right === null){
        var newTree = RedBlackTree(value);
        newTree.red = true;
        newTree.root = false;
        this.right = newTree;
        return newTree;
      } else {
        insertionHelper.call(this.right);
      }
    }
  }

  var newNode = insertionHelper.call(this);
  insertionCleanUp(newNode, P, G, U);

  var insertionCleanUp = function(node, parent, grandparent, uncle){
    //there is an underlying assumption that the root is calling insertion

    //the second case of this 'if' condition is only logical 
    //if parent === root.  If insert is called on a non-root node, this
    //relationship may not be true;

    if(!node.red || parent.value === grandparent.value){
      Case1();
    } else if (parent.red && uncle.red){
      Case3();
      //I have not accounted for G being the root here -- if so, we need
      //to make the root black again
    } else if (parent.value === grandparent.left.value){
      if(parent.red && !uncle.red && node.value === parent.right.value && parent.value === grandparent.left.value){
        //do a left rotation on P, switching the nodes of N and P.  Then do Case 5 stuff.
        Case4Left();
      }
    } else if (parent.value === grandparent.right.value){
      if(parent.red && !uncle.red && node.value === parent.left.value && parent.value === grandparent.right.value){
        Case4Right()

      }
    } else if (parent.red && !uncle.red){
      if(parent.left.value === node.value && grandparent.left.value === parent.value){
        Case5Left();
      } else if (parent.right.value === node.value && grandparent.right.value === parent.value){
        Case5Right();
      }
    }
    
    var Case1 = function(){
      //make sure root is black?
    }

    var Case3 = function(){
      //repaint P and U to black
      //G becomes red
      //if G is root, go to case 1?
    }

    var Case4Left = function(){
      //do a left rotation on P, switching N and P.  Then look to case 5.
    }

    var Case4Right = function(){
      //do a right rotation on P, switching N and P.  Then look to case 5.
    }

    var Case5Left = function(){
      //Do a right rotation on G
      //switch colors of P and G
    }

    var Case5Right = function(){
      //do a left rotation on G
      //switch colors of P and G
    }

  }
  debugger;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */

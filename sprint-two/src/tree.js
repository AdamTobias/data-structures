var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  
  newTree.value = value;
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if(this.value === target){
    return true;
  }

  for(var i = 0, length = this.children.length; i < length; i++){ 
    if(this.children[i].contains(target)){
      return true;
    }
   }
  return false;
};


// var newTr = new Tree("x");
// newTr.addChild("y");


/*
 * Complexity: What is the time complexity of the above functions?
 */

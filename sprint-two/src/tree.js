var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  
  newTree.value = value;
  newTree.children = [];  
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var newChild = Tree(value);
  newChild.parent = this;
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

treeMethods.removeFromParent = function() {
  for(var i = 0; i < this.parent.children.length; i++){ 
    if(this.parent.children[i].value === this.value){
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
};

treeMethods.traverse = function(cb) {
  cb(this.value);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
}


var newTr = new Tree("x");
for (var i = 0; i < 10; i++) {
  newTr.addChild(i);
}
newTr.traverse(function(item) {console.log(item);})

/*
 * Complexity: What is the time complexity of the above functions?
 */

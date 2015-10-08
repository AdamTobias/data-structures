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

treeMethods.addWords = function(word){
  debugger;
  if(this.childWithChar(word[0]) === undefined){
    this.addChild(word[0]);
  } 
  
  if(word.length === 1 && word[0] !== '.'){
    this.childWithChar(word[0]).addWords('.');
  } else if (word.length > 1){
    this.childWithChar(word[0]).addWords(word.slice(1));
  }
}

treeMethods.childWithChar = function(chr){
  for(var i = 0; i < this.children.length; i++){
    if(this.children[i].value === chr){
      return this.children[i];
    }
  }
  return undefined;
}

treeMethods.findWords = function(charArray){
  
}




// var newTr = new Tree("x");
// newTr.addChild("y");


/*
 * Complexity: What is the time complexity of the above functions?
 */

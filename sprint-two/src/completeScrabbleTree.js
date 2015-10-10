var fs = require('fs');
var _und = require ('./underscore-min');


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
  var curValue = this.value;
  var foundWords = [];
  var uniqueCharArray;
  var charIndex = charArray.indexOf(this.value);
  var smallerCharArray = charArray.slice();

  if(charIndex !== -1){
    smallerCharArray = smallerCharArray.slice(0, charIndex).concat(smallerCharArray.slice(charIndex+1));
  }

  uniqueCharArray = _und.uniq(smallerCharArray);

  for(var i = 0; i < uniqueCharArray.length; i++){
    if(this.childWithChar(uniqueCharArray[i]) !== undefined){
      foundWords = foundWords.concat(_und.map(this.childWithChar(uniqueCharArray[i]).findWords(smallerCharArray), function(element){
        return curValue + element;
      }));
    }
  }

  if(this.childWithChar('.') !== undefined){
    foundWords.push(this.value);
  }
  
  return foundWords;
}


var test = Tree('');


var words = fs.readFileSync('./wordsEn.txt').toString().split('\r\n');

for (var i = 0; i < words.length; i++){
  test.addWords(words[i]);
}






















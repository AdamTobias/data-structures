var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    //add a new node with value as the head
    var newNode = Node(value);
    newNode.next = list.head;
    if(list.tail === null){
      list.tail = newNode;
    } 
    if(list.head !== null){
      list.head.previous = newNode;
    }
    list.head = newNode;
  }

  list.removeTail = function(){

    //return last node and remove it

    var tmpVal = list.tail.value;
    list.tail = list.tail.previous;
    list.tail.next = null;
    return tmpVal;
  }

  list.addToTail = function(value) {
    var newNode = Node(value);
    newNode.previous = list.tail;
    if(list.head === null){
      list.head = newNode;
    } 
    if(list.tail !== null){
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var tmpVal = list.head.value;
    list.head = list.head.next;
    list.head.previous = null;
    return tmpVal;
  };

  list.contains = function(target) {
    var i;
    if(list.head === null){
      return false;
    }
    for(i = list.head; !(i.value === target || i.next === null); i = i.next){}
    if(i.value === target){
      return true;
    }
    return false;
  };

  list.printListForward = function(){
    for(var i = list.head; i !== null; i = i.next ){
      console.log('current node value = ' + i.value);
    }
  };

  list.printListBackwards = function(){
    for(var i = list.tail; i !== null; i = i.previous){
      console.log('current node value = ' + i.value);
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
   Insertion (head or tail) : O(1)
   Removal (head or tail) : O(1)
   Contains : O(n)
 */

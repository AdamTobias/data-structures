var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
    }
    if(!(list.tail === null)){
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var tmpVal = list.head.value;
    list.head = list.head.next;
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

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

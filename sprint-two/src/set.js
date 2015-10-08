var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.length = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[length] = item;
  this.length++;
};

setPrototype.contains = function(item) {
  for(var i in this._storage){
    if(this._storage[i] === item){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  for(var i in set._storage){
    if(set._storage[i] === item){
      delete set._storage[i];
      set.length--;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

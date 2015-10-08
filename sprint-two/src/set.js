var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.length = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[this.length] = item;
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
  for(var i in this._storage){
    if(this._storage[i] === item){
      delete this._storage[i];
      this.length--;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

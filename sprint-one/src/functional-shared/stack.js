var Stack = function() {
  var obj = {length:0, storage : {}};
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },

  pop: function() {
    var tmp = this.storage[this.length - 1];
    if (this.length > 0) {
      this.length--;
      return tmp;
    }
  },

  size: function() {
    return this.length;
  }
};



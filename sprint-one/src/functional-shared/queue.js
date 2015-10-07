var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {end:0, start:0, storage:{}};
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.end] = value;
    this.end++;
  },

  dequeue: function(){
    var tmp;
    if(this.end - this.start > 0){
      tmp = this.storage[this.start];
      this.start++;
      return tmp;
    }
  },

  size: function(){
    return this.end - this.start;
  }
};



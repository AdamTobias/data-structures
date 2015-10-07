var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(queueMethods);
  obj.start = 0;
  obj.end = 0;
  obj.storage = {};
  return obj;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function() {
  var tmp = this.storage[this.start];
  if (this.end - this.start > 0) {
    this.start++;
    return tmp;
  }
};

queueMethods.size = function() {
  return this.end - this.start;
};




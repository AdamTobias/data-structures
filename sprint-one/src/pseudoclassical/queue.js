var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.start = 0;
  this.end = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function() {
  var tmp = this.storage[this.start];
  if (this.end - this.start > 0) {
    this.start++;
    return tmp;
  }
};

Queue.prototype.size = function() {
  return this.end - this.start;
};



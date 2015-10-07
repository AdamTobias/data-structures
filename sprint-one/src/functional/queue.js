var Queue = function() {
  var someInstance = {};
  var start = 0;
  var end = 0;  

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function() {
    var tmp;
    if (end - start > 0) {
      tmp = storage[start];
      start++;
    } 
    return tmp;
  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};

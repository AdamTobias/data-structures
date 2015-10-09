var BinarySearchTree = function(value) {
  var tree = Object.create(bstMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};



var bstMethods = {
  insert: function(value) {
    if (value < this.value && this.left !== null) {
      this.left.insert(value);
    } else if (value > this.value && this.right !== null) {
      this.right.insert(value);
    } else if (value < this.value && this.left === null) {
      this.left = BinarySearchTree(value);
    } else if (value > this.value && this.right === null) {
      this.right = BinarySearchTree(value);
    }
  },

  contains: function(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value && this.left !== null) {
      return this.left.contains(value);
    } else if (value > this.value && this.right !== null) {
      return this.right.contains(value);
    }
    return false;
  },

  depthFirstLog: function(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

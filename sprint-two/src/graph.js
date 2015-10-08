

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var tmp = [node, []];
  this.nodes.push(tmp);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0, length = this.nodes.length; i < length; i++) {
    if (this.nodes[i][0] === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0, length = this.nodes.length; i < length; i++) {
    if (this.nodes[i][0] === node) {
      return this.nodes.splice(i, 1);
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0, length = this.nodes.length; i < length; i++) {
    if (this.nodes[i][0] === fromNode) {
      for (var j = 0, jlength = this.nodes[i][1].length; j < jlength; j++) {
        if (this.nodes[i][1][j] === toNode) {
          return true;
        }
      }
      return false;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0, length = this.nodes.length; i < length; i++) {
    if (this.nodes[i][0] === fromNode) {
      this.nodes[i][1].push(toNode);
    } else if (this.nodes[i][0] === toNode) {
      this.nodes[i][1].push(fromNode);
    }
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0, length = this.nodes.length; i < length; i++) {
    if (this.nodes[i][0] === fromNode) {
      for (var j = 0, jlength = this.nodes[i][1].length; j < jlength; j++) {
        if (this.nodes[i][1][j] === toNode) {
          return this.nodes[i][1].splice(j, 1);
        }
      }
    } else if (this.nodes[i][0] === toNode) {
      for (var j = 0, jlength = this.nodes[i][1].length; j < jlength; j++) {
        if (this.nodes[i][1][j] === fromNode) {
          return this.nodes[i][1].splice(j, 1);
        }
      }
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(item) {
    cb(item[0]);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



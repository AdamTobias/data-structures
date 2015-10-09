

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tuples = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index) || [];
  var overwritten = false;
  for (var i = 0, length = bucket.length; i < length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      overwritten = true;
    } 
  }

  if (!overwritten) {
    bucket.push([k,v]);
    this._tuples++;
  }
  
  this._storage.set(index, bucket);
  this.resize();
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket === undefined || _.isEqual(bucket, [])) {
    return null;
  } else {
    for (var i = 0, length = bucket.length; i < length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      } 
    }
  }
  return null;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0, length = bucket.length; i < length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._tuples--;
    } 
  }

  this._storage.set(index, bucket);
  this.resize();
};

HashTable.prototype.resize = function() {
  var tmpArr = [];
  if (this._limit * .75 < this._tuples) {
    for (var i = 0, length = this._limit; i < length; i++) {
      var bucket = this._storage.get(i);
      if(bucket !== undefined){
        for (var j = 0, jlength = bucket.length; j < jlength; j++) {
          tmpArr.push(bucket[j]);
        }
      }
    }
    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);

    for (var i = 0, length = tmpArr.length; i < length; i++) {
      this._tuples--;
      this.insert(tmpArr[i][0], tmpArr[i][1]);
    }
  } else if (this._limit * .25 > this._tuples) {
    for (var i = 0, length = this._limit; i < length; i++) {
      var bucket = this._storage.get(i) || [];
      for (var j = 0, jlength = bucket.length; j < jlength; j++) {
        tmpArr.push(bucket[j]);
      }
    }
    this._limit = this._limit / 2;
    this._storage = LimitedArray(this._limit);

    for (var i = 0, length = tmpArr.length; i < length; i++) {
      this._tuples--;
      this.insert(tmpArr[i][0], tmpArr[i][1]);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



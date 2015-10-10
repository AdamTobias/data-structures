var BloomFilter = function(m, k){
  var filter = Object.create(bloomMethods);
  filter.size = m;
  //filter.storage = array with length = m and populate each value with 0
  filter.numHashes = k;
  

  return filter;
}

var bloomMethods = {};

bloomMethods.add = function(value){
  var hashValue;
  for(var i = 1; i <= k; i++){
    hashValue = this['hash' + i](value);
    this.storage[hashValue] = 1;    
  }
}

bloomMethods.query = function(value){
  var mightContain = true;

  for(var i = 1; i <=k; i++){
    hashValue = this['hash' + i](value);
    if(this.storage[hashValue] === 0){
      mightContain = false;
    }
  }

  return mightContain;
}

bloomMethods.hash1 = function(value) {
  //hash function 1
  //return a hash value
};

bloomMethods.hash2 = function(value) {
  //hash function 2
  //return a hash value
};

bloomMethods.hash3 = function(value) {
  //hash function 3
  //return a hash value
};
module.exports.add = function (a, b) {
  console.log("successfully connect in common js");
  return a + b;
};

class Node {
  value = null;
  key = null;
  next = null;
  constructor(key, value) {
    this.value = value;
    this.key = key;
  }
  display() {
    console.log(this.key + "-" + this.value);
  }
  update(value) {
    this.value = value;
  }
}

module.exports.Node = Node;

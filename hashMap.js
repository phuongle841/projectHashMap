const { LinkedList } = require("./LinkedList");
class hashMap {
  capacity;
  loadFactor;
  Buckets;
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.Buckets = [];
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 33;
    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * primeNumber + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }
  display() {
    for (let i = 0; i < this.Buckets.length; i++) {
      const element = this.Buckets[i];
      if (element != null) {
        element.display();
      }
    }
  }
  set(key, value) {
    this.checkLoadFactor();
    let position = this.hash(key);
    if (this.Buckets[position] == undefined) {
      const newLinkedList = new LinkedList();
      this.Buckets[position] = newLinkedList;
    }
    if (this.Buckets[position].contains(key)) {
      this.Buckets[position].update(key, value);
      return;
    }
    this.Buckets[position].append(key, value);
  }
  get(key) {
    let position = this.hash(key);
    if (this.Buckets[position] == undefined) {
      return null;
    }
    if (true) {
      let current = this.Buckets[position].contains(key);
      return current.value;
    }
  }
  has(key) {
    let position = this.hash(key);
    if (this.Buckets[position] == undefined) {
      return false;
    }
    if (this.Buckets[position].contains(key)) {
      return true;
    }
    return false;
  }
  remove(key) {
    let position = this.hash(key);
    if (this.Buckets[position] == undefined) {
      return false;
    }
    if (this.Buckets[position].contains(key) != false) {
      this.Buckets[position].removeWith(key);
      if (this.Buckets[position].isEmpty) {
        this.Buckets[position] = null;
      }
    }
  }
  length() {
    let counter = 0;
    for (let i = 0; i < this.capacity; i++) {
      if (this.Buckets[i] instanceof LinkedList) {
        counter++;
      }
    }
    return counter;
  }
  clear() {
    for (let i = 0; i < this.capacity; i++) {
      this.Buckets[i] = null;
    }
  }
  keys() {
    let result = [];
    for (let i = 0; i < this.capacity; i++) {
      let currentLink = this.Buckets[i];
      if (currentLink != null) {
        result.splice(result.length - 1, 0, currentLink.keys());
      }
    }
    return result;
  }
  values() {
    let result = [];
    for (let i = 0; i < this.capacity; i++) {
      let currentLink = this.Buckets[i];
      if (currentLink != null) {
        result.push(currentLink.values());
      }
    }
    return result;
  }
  entries() {
    let result = [];
    for (let i = 0; i < this.capacity; i++) {
      let currentLink = this.Buckets[i];
      if (currentLink != null) {
        result.push(currentLink.entries());
      }
    }
    return result;
  }
  checkLoadFactor() {
    let ration = this.length() / this.capacity;
    if (ration > this.loadFactor) {
      this.upgradeCapacity();
    }
  }
  upgradeCapacity() {
    console.log(this.entries());
  }
}
module.exports.hashMap = hashMap;

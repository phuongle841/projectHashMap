const { hashMap } = require("./hashMap");

const myHashMap = new hashMap();

myHashMap.set("apple", "red");
myHashMap.set("banana", "yellow");
myHashMap.set("carrot", "orange");
myHashMap.set("dog", "brown");
myHashMap.set("elephant", "gray");
myHashMap.set("frog", "green");
myHashMap.set("grape", "purple");
myHashMap.set("hat", "black");
myHashMap.set("ice cream", "white");
myHashMap.set("jacket", "blue");
myHashMap.set("kite", "pink");
myHashMap.set("lion", "golden");
myHashMap.set("mouse", "black");
myHashMap.set("net", "fish");
myHashMap.set("ocean", "blue");
myHashMap.set("piggy", "delicious");
myHashMap.set("queen", "slay");
myHashMap.set("rainbow", "requiem");
myHashMap.set("sun", "sky");
myHashMap.set("turtle", "slow");
myHashMap.set("umbrella", "rain");
myHashMap.set("vegetables", "legumes");
myHashMap.set("worm", "earth");
myHashMap.set("x-ray", "bones");
myHashMap.set("yarn", "web");
myHashMap.set("zebra", "racist");

console.log("Carla's information: " + myHashMap.get("Carla"));
console.log("is Jack has information in here: " + myHashMap.has("Jack"));
console.log("current occupation in hash map: " + myHashMap.length());
console.log("============");

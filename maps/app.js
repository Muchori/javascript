/**
 * MAPS => key value pairs -> can use ANY type as a key or a value
 */

const map1 = new Map();
/**
 * Set Keys
 */
const key1 = "Some string",
  key2 = {},
  key3 = function () {};
/**
 * Set map values
 */
map1.set(key1, "Vale of key 1");
map1.set(key2, "Vale of key 2");
map1.set(key3, "Vale of key 3");

/**
 * get values by key
 */
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

//count values
console.log(map1.size);

/**
 * Iterating through maps
 */

//looping using for ..of to get keys and values
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

//iterate keys only
for (let key of map1.keys()) {
  console.log(key);
}

//iterate values only
for (let value of map1.values()) {
  console.log(value);
}

/**
 * forEach
 */
map1.forEach(function (value, key) {
  console.log(`${key} = ${value}`);
});

/**
 * convert sets to array
 */
// array of key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// array of value pairs
const valArray = Array.from(map1.values());
console.log(valArray);

// array of value pairs
const keyArray = Array.from(map1.keys());
console.log(keyArray);

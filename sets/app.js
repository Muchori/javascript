/**
 * SETS -> stores unique values of ny type
 */
const set1 = new Set();

//add values
set1.add(100);
set1.add("A string");
set1.add({ name: "John" });
set1.add(true);

/* const set2 = new Set([2, true, "string", { name: "Billy" }]);
console.log(set2); */

console.log(set1);

// get count of set
console.log(set1.size);

//check for values
/* console.log(set1.has(true));
console.log(set1.has({ name: "John" }));
console.log(set1.has(50 + 50)); */

//delete from set
//console.log(set1.delete(100));

//iterate through sets
//for...of
for (let item of set1) {
  console.log(item);
}

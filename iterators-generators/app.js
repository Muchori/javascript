/**
 * Iterators ->
 * Generators -> can return mutliple values
 */
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}
// create an array of names
const namesArr = ["Jack", "Elon", "Buffet"];
// init the iterator
const names = nameIterator(namesArr);
console.log(names.next());
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());

/**
 * Generator
 */
function* sayNames() {
  yield "Jack";
  yield "Joe";
  yield "Devoe";
}

const name = sayNames();
console.log(name.next());
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// id creator/ generator

function* createIds() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

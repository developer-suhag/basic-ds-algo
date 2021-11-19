// Last In First Out => LIFO

class Stack {
  constructor() {
    this.stack = [];
  }
  add(element) {
    this.stack.push(element);
  }
  remove() {
    this.stack.pop();
  }
}

const plates = new Stack();
console.log(plates.stack);

plates.add("Abul");
console.log(plates.stack);

plates.add("Babul");
console.log(plates.stack);

plates.add("Cabul");
console.log(plates.stack);

plates.add("Dabul");
console.log(plates.stack);

plates.add("Ebul");

console.log(plates.stack);

plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);

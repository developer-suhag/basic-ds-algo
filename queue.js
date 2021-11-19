// First In First Out => FIFO

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    return this.queue.shift();
  }
}

const premiks = new Queue();

premiks.enqueue("Abul");
premiks.enqueue("Babul");
premiks.enqueue("Cabul");
premiks.enqueue("Dabul");
premiks.enqueue("Ebul");

console.log(premiks.queue);

premiks.dequeue();
console.log(premiks.queue);
premiks.dequeue();
console.log(premiks.queue);

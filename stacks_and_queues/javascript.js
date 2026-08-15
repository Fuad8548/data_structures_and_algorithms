class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
 
class OptimizedQueue {
  constructor() {
    this.head = null;   // front of the line - where dequeue happens
    this.tail = null;   // back of the line - where enqueue happens
    this._size = 0;
  }
 
  enqueue(item) {
    const node = new Node(item);
    if (this.tail === null) {
      // queue was empty - new node is both head AND tail
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;   // old tail points to new node
      this.tail = node;        // new node IS the new tail
    }
    this._size++;
  }
 
  dequeue() {
    if (this.isEmpty()) throw new Error("dequeue from empty queue");
    const node = this.head;
    this.head = this.head.next;   // move front pointer forward
    if (this.head === null) {
      this.tail = null;           // queue is now empty - reset tail too
    }
    this._size--;
    return node.data;
  }
 
  isEmpty() {
    return this._size === 0;
  }
 
  get length() {
    return this._size;
  }
}
 
// ============================================================
// Practical example
// ============================================================
function demoSupportLine() {
  console.log("=== Support ticket line (FIFO) ===");
  const tickets = new OptimizedQueue();
 
  for (const customer of ["Alice", "Bob", "Carol", "Dave"]) {
    tickets.enqueue(customer);
    console.log(`  ticket filed: ${customer}`);
  }
 
  console.log("\n  agent starts handling tickets in order:");
  while (!tickets.isEmpty()) {
    console.log(`  now serving: ${tickets.dequeue()}`);
  }
  console.log();
}


demoSupportLine();
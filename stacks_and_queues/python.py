from collections import deque

class OptimizedQueue:
    def __init__(self):
        self._items = deque()
 
    def enqueue(self, item):
        self._items.append(item)       # O(1) - true constant time
 
    def dequeue(self):
        if self.is_empty():
            raise IndexError("dequeue from empty queue")
        return self._items.popleft()   # O(1) - true constant time, no shifting
 
    def is_empty(self):
        return len(self._items) == 0
 
    def __len__(self):
        return len(self._items)
 
 
# ============================================================
# Practical example: support ticket line
# ============================================================
def demo_support_line():
    print("=== Support ticket line (FIFO) ===")
    tickets = OptimizedQueue()
    print(tickets)
 
    for customer in ["Alice", "Bob", "Carol", "Dave"]:
        tickets.enqueue(customer)
        print(f"  ticket filed: {customer}")
 
    print("\n  agent starts handling tickets in order:")
    while not tickets.is_empty():
        print(f"  now serving: {tickets.dequeue()}")
    print()


demo_support_line()
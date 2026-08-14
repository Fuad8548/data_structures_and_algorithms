<div align="center">Data Structures and Algorithms in Python</div>

- Linked List → Stack → Queue → Heap → Priority Queue                                          
- Hash Table → Set

## Stacks
A stack is a Last-in, First-out (LIFO) data structure. It's a rule laid on top of an existing structure (array or linked list) that restricts how you're allowed to add/remove things.
- If built on our linked list: push = insert at head (O(1) — no shifting), pop = remove from head (O(1))
- If built on a Python list: push = append() (add to end), pop = .pop() (remove from end)
Stack operation is language-independent:
|                        |         Python list         |      JavaScript Array      |
| :--------------------: | :-------------------------: | :------------------------: |
|  Insert/remove at end  |   O(1) — append() / pop()   |   O(1) — push() / pop()    |
| Insert/remove at front | O(n) — insert(0,x) / pop(0) | O(n) — unshift() / shift() |

**Given that Python list append()/pop() are both O(1), how does python’s list.append() work under the hood?**
Actually, Python's list.append() method has an amortized time complexity of O(1). The average time taken per operation over a series of appends is always constant (O(1)), while the worst-case complexity for a single isolated append can be O(n). 
- Python lists are implemented under the hood as dynamic arrays (contiguous blocks of memory pointers)
- Over-allocation: When we create a list, Python allocates more memory slots than the list currently needs.
- The O(1) Case: Most of the time, the list has empty, pre-allocated slots at the end. Appending simply places the new element pointer into the next available slot and updates the list size counter. This takes constant time.
- The O(n) Case: When the pre-allocated space is completely full, Python must resize the underlying array. It allocates a new, larger block of memory (usually growing exponentially), copies all n existing elements to the new location, and then appends the new element. Copying n elements takes O(n) time.
    ![Graph Asset](./images/python_stacks.png)
Python list.pop() can behave exactly like append() with a clean O(1) complexity, but simple nuances while popping from anywhere else - list.pop(i) is O(n)
|         Operation         | Time Complexity |                            Reason                            |
| :-----------------------: | :-------------: | :----------------------------------------------------------: |
|  list.pop() (Last item)   | Amortized O(1)  |         No shifting required; rare memory shrinking.         |
| list.pop(0) (First item)  |      O(n)       |       Every single remaining element must shift left.        |
| list.pop(i) (Middle item) |      O(n)       | All (n – 1) remaining elements after index i must shift left |
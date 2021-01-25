
# STACKS

They are data collection
A LIFO data structure! (Last In First Out)

The last element added to the stack will be the first element removed from the stack.

They are not a built in data structure in JavaScript, but are relatively simple to implement

Think about a stack of plates, or a stack of markers, or a stack of ... anything.
As yo pile it up the last thing ( or the topmost thing) is what gets removed first.

## Stacks are used
- Managing function invocations
- Undo / Redo
- Routing ( the history object) is treated like a stack!

### Array implementation.

Using push() and pop(), 
Or Unshift() and shift(), 

in this case push()/ pop() is better.


### Linked List implementation.

```javascript
const stack = new Stack();

stack.push("first");
stack.pop("first");
```


## Big O of STACKS

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)



# QUEUES

A FIFO data structure! (First In First Out)

Queues are useful fro processing tasks and are foundational for more complex data structures

Insertion and Removal can be done in o(1), But a good Queue implementation HAS to be O(1)

Queues exist everywhere! Think about the last time you waited in line...

### How do we use them in programming?
- Background Tasks
- Uploading resources
- Printing/ Task processing


### Array Implementation

push() and Shift()
OR Unshift and pop();
tho they are not ideal since both require re-arranging elements in the array.

### Linked List Implementation


```javascript
const stack = new Queue();

stack.unqueue("first"); //insertion at the end.
stack.dequeue("first"); //removes from the beginning.
```

## Big O of QUEUES

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)
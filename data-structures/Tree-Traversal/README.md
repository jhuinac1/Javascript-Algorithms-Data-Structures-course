# TREE TRAVERSAL

## Traversing A Tree

### Two Ways:
- ### Breadth-first Search
- ### Depth- first Search

##  BFS (Breadth-First Search)
Going across
means - visiting every node in the same level (siblings) before diving into a child node.

### Steps - Iteratively
- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
    - Dequeue a node from the queue and push the value of the node into the variable that stores the ndoes
    - If there is a left property on the node dequeued - add it to the queue
    - If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values

![BFS](./Breadth-first-search-scrn.PNG)



## DFS (Depth-First Search)

#### 3 different ways:

- #### InOrder
- visit node first (add to list, print out);
- then explore everything on left before exploring the right.

#### Used commonly with BST's
We get all nodes in the tree in their underlying order, in-order (Non-descending);

![BFS-InOrder](./inOrder.PNG)



- #### PreOrder
- explore everything on the left;
- visit node ( add to list, print out);
- explore everything on the rigtt;

#### used to "export" a tree structure so that it is easily reconstructed or copied

![BFS-PreOrder](./preOrder.PNG)



- #### PostOrder
- Explore every child first, from left to right;
- add the value of the parent after it has explored all childs;

![BFS-PreOrder](./postOrder.PNG)



## BFS vs DFS 

Time complexity is the same

Space depends on the complexity of the tree

for wide-long trees, BFS will be taking a lot of space

![BFS-space](./breadth-first.PNG)


for deep-long trees, DFS will be taking a lot of space.

![DFS-space](./depth-first.PNG)



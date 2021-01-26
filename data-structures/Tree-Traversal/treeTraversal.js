
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class NodeQ {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        if (value === undefined) {
            return undefined;
        }
        const newNode = new NodeQ(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) { return null }
        let temp = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }
        else {
            this.first = this.first.next;
            temp.next = null;
        }
        this.size--;
        return temp.value;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let temp = this.root;
            while (true) {
                if (value === temp.value) {
                    return undefined;
                }
                if (temp.value > value) {
                    if (temp.left === null) {
                        temp.left = newNode;
                        return this;
                    }
                    temp = temp.left;
                    continue;
                }
                if (temp.value < value) {
                    if (temp.right === null) {
                        temp.right = newNode;
                        return this;
                    }
                    temp = temp.right;
                }
            }
        }

    }

    find(value) {
        if (!this.root) {
            return false;
        }
        else {
            let temp = this.root;
            while (temp) {
                if (temp.value === value) {
                    return true;
                }
                if (temp.value > value) {
                    temp = temp.left;
                } else {
                    temp = temp.right;
                }
            }
            return false;
        }
    }

    //BFS
    // Steps - Iteratively
    // - Create a queue(this can be an array) and a variable to store the values of nodes visited
    // - Place the root node in the queue
    // - Loop as long as there is anything in the queue
    // - Dequeue a node from the queue and push the value of the node into the variable that stores the ndoes
    //      - If there is a left property on the node dequeued - add it to the queue
    //      - If there is a right property on the node dequeued - add it to the queue
    // - Return the variable that stores the values
    //works!
    bfs() {
        if (!this.root) { return null }
        const queque = new Queue();
        const visited = [];
        let node = null;
        queque.enqueue(this.root);
        while (queque.size) {
            node = queque.dequeue();
            visited.push(node.value);
            if (node.left) {
                queque.enqueue(node.left);
            }
            if (node.right) {
                queque.enqueue(node.right)
            }
        }
        return visited;
    }

    //DFS - PreOrder
    /** Steps Recursively
     * - Create a variable to store the values of nodes visited 
     * - Store the root of the BST in a variable called current 
     * - Write a helper function which accepts a node 
     *      - Push the value of the node to the variable that stores the values 
     *      - If the node has a left property, call the helper function with the left property on the node
     *      - If the node has a right property, call the helper function with the right property on the node 
     * - Invoke the helper function with the current variable 
     * - REturn the array of values.
     * 
     */
    dfsPreOrder(){
        const visited = [];
        let current = this.root;

        const helperFunc = (node) => {
            if(node === null){ return};

            visited.push(node.value);
            helperFunc(node.left);
            helperFunc(node.right);
        }
        
        helperFunc(current);
        return visited;
    }

    dfsInOrder() {
        const visited = [];
        let current = this.root;

        const helperFunc = (node) => {
            if(node === null){ return};

            helperFunc(node.left);
            visited.push(node.value);
            helperFunc(node.right);
        }
        
        helperFunc(current);
        return visited;
    }

    dfsPostOrder(){
        const visited = [];
        let current = this.root;

        const helperFunc = (node) => {
            if(node === null){ return};

            helperFunc(node.left);
            helperFunc(node.right);
            visited.push(node.value);
        }
        
        helperFunc(current);
        return visited;
    }
}


// const new1 = new BinarySearchTree();

// new1.insert(10)
// new1.insert(6)
// new1.insert(15)
// new1.insert(3)
// new1.insert(8)
// new1.insert(20)


// console.log("pre-order", new1.dfsPreOrder());
// console.log("in order",new1.dfsInOrder());
// console.log("post-order",new1.dfsPostOrder());

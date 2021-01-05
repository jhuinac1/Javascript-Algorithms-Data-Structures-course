/**
 * What is a linked List?
 * A data structrue that contains a head, tail, length property.
 * 
 * Linked lists consists of nodes, and each node has a value and a pointer to another node or null
 */

//Lets define a Node
//piece of data - val
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// let first = new Node('hi');
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are you");

// console.log(first);

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    /**Pushing pseudocode
     * This function should accept a value
     * create a new node using the value passed to the function
     * If there is no head property on the list, set the head and tail to be the newly creaded node
     * Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node 
     * Increment the length by one
     */
    push(val) {
        let newNode = new Node(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        //to return the whole list
        return this;
    }

    /**Popping pseudocode
     * Removing a node from the end of the Linked List!
     * If there are no nodes in the list, return undefined
     * Loop through the list until you reach the tail
     * Set the next property of the 2nd to last node to be null
     * Set the tail to be the 2nd to last node
     * Decrement the length of the list by 1
     * Return the value of the node removed
     */
    pop() {
        if (!this.head) { return undefinded };

        let temp = this.head;
        let val = null;
        while (temp.next !== this.tail) {
            temp = temp.next;
        }
        val = temp.next.val;
        this.tail = temp;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return val;
    }

    /**Shifting pseudocode
     * If there are no nodes, return undefined
     * store the current head property in a variable
     * Set the head property to be the current head's next property
     * Decrement the length by 1
     * Return the value of the node removed
     */
    shift() {
        if (!this.head) { return undefined }

        let value = this.head.val;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return value;
    }

    /**Unshifting Pseudocode
     * This function should accpt a value
     * Create a new node using the vlue passed to the funtion
     * If there is no head property on the list, set the head and tail to be the newly created node
     * Otherwise set the newly created node's  next property to be the current head property on the list
     * Set the head property on the list to be that newly created node
     * Increment the length of the list by 1
     * Return the linked list
     */
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**Get   - retrieving a node by it's position in the Linked List
     * This function should accept an index
     * If the index is less than zero or greater than or equal to the length of the list, return null
     * Loop through the list until you reach the index and return the node at that specific index.
     */
    get(index) {
        if (index >= this.length || index < 0) {
            return null;
        }
        let temp = this.head;
        if (index === this.length - 1) {
            temp = this.tail
            return temp;
        }
        let i = 0;
        while (i <= index) {
            if (i === index) {
                return temp;
            }
            temp = temp.next;
            i++
        }
    }

    /**Set -- Changing the value of a node based on it's position in the Linked List
     * This function should accept a value and an index
     * Use Your get function to find the specific noce.
     * If the node is not found, return false;
     * if the node is found, set the value of that node tob e the value passed to the function and return true;
     */
    set(value, index) {
        let foundNode = this.get(index);
        if (!foundNode) {
            return false;
        }
        foundNode.val = value;
        return true;
    }

    /**Insert -  
     * Pseudocode
     * If the index is less than zero or greater than the length, return false
     * If the index is the same as the length, push a new node to the end of the list
     * If the index is 0, unshift a new node to the start of the list
     * Otherwise, using the get method, access the node at the index -1
     * Set the next property on that node to be the new node
     * Set the next property on the new node to be the previous next
     * Increment the length
     * Return true
    */
    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            return !!this.push(value);
        }
        else if (index === 0) {
            return !!this.unshift(value);
        } else {
            let prev = this.get(index - 1);
            let newNode = new Node(value);
            newNode.next = prev.next;
            prev.next = newNode;
        }
        this.length++;
        return true;
    }

    /**Remove- Removing a node from the Linked List at a specific position
     * Pseudocode
     *  If the index is less than zero or greater than the length, return undefined
     * If the index is the same as teh length -1, pop
     * If the index is 0, shift
     * Otherwise, using the get method, access the node at the index -1
     * Set the next property on that node to be the next of the node
     * Decrement the length
     * Return the value of the node removed
     */
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === this.length - 1) {
            return this.pop();
        } else if (index === 0) {
            return this.shift();
        }

        let temp = this.get(index - 1);
        let value = temp.next.val;
        temp.next = temp.next.next;
        this.length--;
        return value;
    }

    /**Reverse - reversing the Linked List
     * Pseudocode
     * Swap the head and tail
     * Create a variable called next
     * Create a variable called previous
     * Create a variable called node and initialize it to the head property
     * Loop through the list
     * Set next to be the next property on whatever node is
     * Set the next property on the node to be whatever prev is
     * Set prev to be the value of the node variable
     * Set the node variable to be the value of the next variable
     */
    reverse() {
        if (this.length <= 1) {
            return this;
        }
        let current = this.head.next;
        let prev = this.head;
        let next = current.next;
        while (next) {
            current.next = prev;
            prev = current;
            current = next;
            next = next.next;
        }
        current.next = prev;
        this.tail = this.head;
        this.tail.next = null;
        this.head = current;
        return this;
    }

    toString() {
        let string = "";
        let temp = this.head;
        while (temp) {
            string += temp.val + " ";
            temp = temp.next;
        }
        return string;
    }

}

const test1 = new SinglyLinkedList();

test1.push(4)
test1.push(7)
test1.push(8)
console.log(test1.push(9))

console.log(test1.pop());
console.log(test1)
console.log(test1.shift());
test1.unshift(10);
test1.unshift(2)
test1.unshift(1)
test1.unshift(80);
console.log(test1)
console.log(test1.get(0));
console.log(test1.get(1));
console.log(test1.get(2));
console.log(test1.get(3));
console.log(test1.get(4));
console.log(test1.get(5));
console.log(test1.get(6));
console.log(test1.get(7));
console.log(test1.set(100, 3));
console.log(test1);
console.log(test1.get(3));
test1.insert(0, 20);
test1.insert(1, 10);
test1.insert(8, 50);
console.log(test1.toString())
test1.insert(5, 300)
console.log(test1.toString())
console.log(test1.remove(0), "length:", test1.length)
console.log(test1.remove(5), "length:", test1.length)
console.log(test1.remove(7), "length:", test1.length)
console.log(test1.toString())
test1.reverse();
console.log("32", test1.toString())

let test2 = new SinglyLinkedList();

test2.push("hello");
test2.push("WORLD");
test2.push("sup");
console.log(test2.toString());




class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //Push()
    //adding a node to the end of the Double Linked list
    /** PSEUDO
     * -Create a new node with the value passed to the function
     * - If the head property is null set the head and tail to be the newly created node
     * - If not, set the next property on the tail to be that node
     * - Set the previous property on the newly created node to be the tail
     * - Set the tail to be the newly created node.
     * - Increment the length
     * - Return the Doubly Linked List
     */
    push(value) {
        if (value === null){
            return null;
        }
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    //Pop()
    //Removing a node from the End of the Doubly Linked List
    /**PSEUDO
     * - If there is not head/tail, return undefined
     * - else Store the current tail in a variable to return later
     * - If the length is 1, set the head and tail to be null
     * - Update the tail to be the previous Node.
     * - Set the newTail's next to null
     * - Decrement the length
     * - Return the value removed.
     */
    pop() {
        if(!this.head){ return undefined};
        const nodeRemoved = this.tail;
        if(this.length === 1){
            this.tail = null;
            this.head = null;
        }else{
            this.tail = nodeRemoved.prev;
            this.tail.next = null;
            nodeRemoved.prev = null;
        }
        this.length--;
        return nodeRemoved;
    }

    //shift()
    //Removing a node from the beginning of the Doubly Linked List
    /**
     * PSEUDO
     * - if length is 0, return undefined
     * - Store the current head property in a varibable (we'll call it old head)
     * - if the length is one
     *      > Set the head to be null
     *      > Set the tail to be null
     * - Update the head to be the next of the old head.
     * - Set the head's prev property to null
     * - Set the old head's next to null
     * - Decrement the length
     * - Return old head.
     */
    shift(){
        if(this.length < 1){
            return undefined;
        }
        const oldHead = this.head;
        if(this.length ===1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    //unshift()
    //Adding a node to the beginning of the doubly Linked List
    /**
     * PSEUSDO
     * - Create a node witht the value passed to the function
     * - If the length is 0
     *      >Set the head to be the new node
     *      >Set the tail to be the new node
     * - Otherwise
     *      > Set the prev property on the head of the list to be the new node
     *      > Set the next property on the new node to be the head property
     *      > Update the head to be the new node
     * -Increment the length
     * - Return the list
     */
    unshift(value){
        if(value === undefined){
            return undefined;
        }
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //get()
    //Accessing a node in a Doubly Linked List by its position.
    /** PSEUDO
     * - If the index is less than 0 or greater or equal to the length, return null
     * - if the index is less than or equal to half the length of the list
     *      > Loop through the list starting from the head and loop towards the middle 
     *      > Return the node once it is found
     * - If the index is greater than half the length of the list
     *      > Loop through the list starting from the tail and loop towards the middle
     *      > Return the node once it is found.
     */
    get(index){
        if(typeof index !== "number" || index === undefined){
            return null;
        }
        if( index < 0 || index >= this.length){
            return null;
        }
        let halfLength = Math.floor(this.length / 2);
        if(index <= halfLength ){
            // console.log("lowerrrr!!", halfLength);
            let foundNode = this.head;
            for(let i = 0; i <= halfLength; i++){
                if(i === index){
                    return foundNode;
                }
                foundNode = foundNode.next;
            }
        }else{
            // console.log("upper", halfLength);
            let foundNode = this.tail;
            for(let i = this.length -1; i >= halfLength; i--){
                if(i === index){
                    return foundNode;
                }
                foundNode = foundNode.prev;
            }
        }
    }
    
    //set(index: Integer, any value)
    // Replacing the Value of a node to the in a Doubly Linked LIst
    /**
     * PSEUDO
     * - Create a variable which is the result of the get method at the index passed to the function
     *      >If the get method return a valid node, set the value of that node to be  the value pased to the function
     *      >Return true
     * - Otherwise, return false
     */
    set(index, value){
        const foundNode = this.get(index);
        // console.log(foundNode)
        if(!foundNode){
            return false;
        }
        foundNode.val = value;
        // console.log(foundNode)
        return true;
    }

    //insert(index, value);
    // Adding a node in a Doubly Linked List by a certain position
    /**
     * PSEUDO
     * - If the index is less than zero or greater than or equal to the length return false;
     * - If the index is 0, unshift;
     * - If the index is the same as the length, push;
     * - Use the get method to access the index -1;
     * - Set the next and prev properties on the correct nodes to link everything together;
     * - Increment the length;
     */
    insert(index, value){
        if( index < 0 || index > this.length){
            return false;
        }
        if(index === 0) { 
            this.unshift(value);
        }
        else if(index === this.length){
            this.push(value);
        }
        else{
            const newNode = new Node(value);
            const prevNode = this.get(index - 1);
            // const afterNode = prevNode.next;
            newNode.next = prevNode.next;
            newNode.next.prev = newNode;
            newNode.prev = prevNode;
            prevNode.next = newNode;
            this.length++;
        }
        return true;
    }

    //remove(index)
    // Removing a node in a Doubly Linked List by a certain position 👻 
    /**PSEUDO
     * - If the index is less than zero or greater than or equal to the length return undefined
     * - If the index is 0, use shift()
     * - if the index is the same as the length -1, pop
     * - Use the get() method to retrieve the item to be removed
     * - Update the next and prev properties to remove the found node from the list 
     * - Set next and prev to null on the found node
     * - Decrement the length
     * - Return the removed node 
     * 
     */
    remove(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }
        if(index === 0){
            return this.shift();
        }
        if(index === this.length -1 ){
            return this.pop();
        }
        const removedNode = this.get(index);
        const prevNode = removedNode.prev;
        prevNode.next = removedNode.next;
        prevNode.next.prev = prevNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
    //reverse()
    //This function should reverse all of the nodes in a DoublyLinkedList, and should return the list; 🔥 
    reverse(){
        if(this.length < 2){
            return this;
        }
        let tempNode = this.head.next;
        if(this.length > 2){
            while(tempNode !== this.tail){
                const prevNode = tempNode.prev;
                const nextNode = tempNode.next;
                tempNode.next = prevNode;
                tempNode.prev = nextNode;
                tempNode = nextNode;
            }
        }
        this.head.prev = this.head.next;
        this.head.next = null;
        this.tail.next = this.tail.prev;
        this.tail.prev = null;
        this.tail = this.head;
        this.head = tempNode;
        return this;
    }

}


const newDoubly = new DoublyLinkedList();
// (newDoubly.push(3));
// (newDoubly.push(5));
// (newDoubly.push(9));


// newDoubly.unshift();
// newDoubly.unshift(10);
// newDoubly.unshift(200);
// newDoubly.unshift(80);
// newDoubly.unshift(70);
// newDoubly.insert(0, 100)
// console.log(newDoubly.remove(-1));
// console.log(newDoubly);
// console.log(newDoubly);
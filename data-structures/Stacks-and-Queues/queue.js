
/** A QUEUE using ARRAY */
//FIFO

// const arrQueue = [];

// arrQueue.push("first");
// arrQueue.push("Second");
// arrQueue.push("Third");
// arrQueue.push("Fourth");


// console.log(arrQueue);

// arrQueue.shift();
// arrQueue.shift();
// arrQueue.shift();
// console.log(arrQueue);


///Shift and push work but is not ideal since removing re-arranges the array;
//Unshift and pop also works but is still not ideal because inserting re-arranges the array;



/** A QUEUE CLASS */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**enqueue PSEUDOCODE
     *  - This Function accepts some value 
     * - Create a new Node using that value passed to the function
     * - If there are no nodes in the queue, set this node to be the first and last property of the queue 
     * - Otherwise, set the next property on the current last to be that node, and then set the last property of queue to be that node;
     * - Increment size by 1 and return size;
     */
    enqueue(value){
        if(value === undefined){
            return undefined;
        }
        const newNode = new Node(value);
        if(this.size === 0 ){
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }


    /**dequeue PSEUDOCODE
     * - If there is no first property, just return null
     * - Store the fist property in a variable 
     * - See if the first is the same as the lsat ( check if there is only 1 node).
     * - If so, set the first and last to be null
     * - If there is more than 1 node, set the first property to be the next property of first
     * - Decrement the size by 1
     * - Return the value of the node dequeued 
     * 
     */
    dequeue(){
        if(!this.first) { return null}
        let temp = this.first;

        if(this.size ===1 ){
            this.first = null;
            this.last = null;            
        }
        else {
            this.first = this.first.next;
            temp.next = null;
        }
        this.size--;
        return temp.value

    }
}
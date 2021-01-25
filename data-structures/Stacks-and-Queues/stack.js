// stack with array implementation.


// const stack = [];

// stack.push("google");
// stack.push("instagram");
// stack.push("youtube");

// console.log(stack);
// console.log(stack.pop());





// stack.unshift("hello");
// stack.unshift("world");
// stack.unshift("whatup");

// console.log(stack);
// console.log(stack.shift());


//PUSHING / POPPING,  SHIFTING/ UNSHIFTING
//  PUSHING AND POPPING is better since we don't have to re-arrange any element after removing or addding elelments to the array.


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** PUSHING PSEUDOCODE
     * - The function should accept accpet a value
     * - Create a new node with the value 
     * - If there are no nodes in the stack, set the first and last property to be the newly created node 
     * - If there is at least one node,  create a variable that stores the current first property on the stack
     * - Reset the first property to be the newly created node 
     * - Set the next property on the node to be the previously created variable 
     * - Increment the size of the stack by 1;
     */
    push(value){
        if(value === undefined) {return undefined}

        const newNode = new Node(value);
        if(!this.last){
            this.first = newNode;
            this.last = newNode;            
        }else{
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;

    }

    /** POP PSEUDOCODE 
     * - If there are no nodes in the stack, return null 
     * - Create a temporary variable to store the first property on the stack
     * - if there is only 1 node, set the first and last property to be null 
     * - if there is more than one node, set the fisrt property to be the next property on the current first
     * - Decrement the size b 1
     * - return the value of the node removed
     */
    pop(){
        if(this.size  < 1){
            return null
        }
        let value = this.first.value;
        if(this.size === 1 ){
            this.first = null;
            this.last = null;
        }
        else {
            const temp = this.first;
            this.first = this.first.next;
            temp.next = null;
        }
        this.size--;
        return value;
    }
}



const stack = new Stack();

stack.push("first");
console.log(stack.push()); //this should return undefinded, becuase no argument is being passed
console.log(stack.push("second"));
console.log(stack.push("Third"));
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
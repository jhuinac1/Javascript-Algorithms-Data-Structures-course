
class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

//priority queue using a min Heap


/** - Write a Min Binary Heap - lower number means higher priority.
 * - Each Node has a val and a priority. Use the priority to build the heap.
 * - Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
 * - Dequeue method removes root element, return it, and rearranges heap using priority.
 */
class PriorityQueue {
    constructor(){
        this.values = [];
    }

    getParent(child){
        return Math.floor( (child -1) / 2);
    }
    getFirstChild(parent){
        return (2 * parent) + 1;
    }
    getSecondChild(parent){
        return (2 * parent) + 2;
    }
    lastItemIndex(){
        return this.length() -1;
    }
    length(){
        return this.values.length;
    }
    minElement(index1, index2){
        return (this.values[index2].priority <= this.values[index1].priority)? index2: index1;
    }
    swapElements(index1, index2){
        const temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
    }

    enqueue(value, priority){
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        let index = this.lastItemIndex();
        let parent = this.getParent(index);

        while(index && this.values[parent].priority > this.values[index].priority){
            this.swapElements(index, parent);
            index = parent;
            parent = this.getParent(index);
        }
    }

    dequeue(){
        if(this.values.length === 0) {
            return undefined;   
        }
        if(this.values.length === 1){
            return this.values.pop();
        }
        let parentIndex = 0;
        let maxRemoved = this.values[parentIndex];
             
        this.values[parentIndex] = this.values.pop();
        
        while(parentIndex < this.lastItemIndex()){
            let minSiblingIdx = this.minElement(this.getFirstChild(parentIndex), this.getSecondChild(parentIndex));
            if(this.values[parentIndex].priority < this.values[minSiblingIdx].priority || minSiblingIdx > this.lastItemIndex()){
                break
            }
            this.swapElements( parentIndex, minSiblingIdx);
            parentIndex = minSiblingIdx;
        }
        return maxRemoved;
    }
}


const newQ = new PriorityQueue();

// newQ.enqueue("hello", 5);
// newQ.enqueue("hei", 2);
// newQ.enqueue("hro", 1);
// newQ.enqueue("ok", 0);
// newQ.enqueue("ok", 5);
// newQ.enqueue("ok", 1);
// newQ.enqueue("ok", 0);

newQ.enqueue("gunshot wound", 5);
newQ.enqueue("common cold", 1);
newQ.enqueue("high fever", 4);
newQ.enqueue("broken arm", 2);
newQ.enqueue("glass in foot", 3);


console.log(newQ);
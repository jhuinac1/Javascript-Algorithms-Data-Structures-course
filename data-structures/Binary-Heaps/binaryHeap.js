
/// Insert Pseudocode
/**
 * - Push the value into the values property on the heap 
 * - Bubble up:
 *      - Create a variable called index which is the length of the values property -1
 *      - Create a variable called parentIndex which is the floor of (index-1) / 2
 *      - Kepp looping as long as the values element at the parentIndex is less than the vlaues element at the child index 
 *          - Swap the value of the values element at the parentIndex with the value of the element property at the child index 
 *          - Set the index to be the parentIndex, and start over! 
 */

 /**

 class Name:
    MaxBinaryHeap

Properties:
    Values = []
  */

  /// Removing ( also called extract max)
  /**
   * - Swap the first value in the values property with the last one 
   * - Pop from the values property, so you can return the value at the end 
   * - Have the new root "sink down" to the correct spot...
   *    - Your parent index starts at 0 (the root);
   *    - Find the index of the left child: 2 * index + 1 (make sure its not out of bounds);
   *    - Find the index af the right child: 2 * index + 2 (make sure its not out of bounds);
   *    - If the left or right child is greater than the element... swap. if both left and right children are larger, swap with the largest child.
   *    - The child index you swapped to now becomes the new parent index. 
   *    - Keep looping and swapping until neither child is larger than the element.
   *    - Return the old root!
   */

class MaxBinaryHeap {
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
    maxElement(index1, index2){
        return (this.values[index2] >= this.values[index1])? index2: index1;
    }
    swapElements(index1, index2){
        const temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
    }

    insert(value){
        this.values.push(value);
        let index = this.lastItemIndex();
        let parent = this.getParent(index);

        while(index && this.values[parent] < this.values[index]){
            this.swapElements(index, parent);
            index = parent;
            parent = this.getParent(index);
        }
    }

    remove(){
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
            let maxSiblingIdx = this.maxElement(this.getFirstChild(parentIndex), this.getSecondChild(parentIndex));
            if(this.values[parentIndex] > this.values[maxSiblingIdx] || maxSiblingIdx > this.lastItemIndex()){
                break
            }
            this.swapElements( parentIndex, maxSiblingIdx);
            parentIndex = maxSiblingIdx;
        }
        return maxRemoved;
    }
}

const newHeap = new MaxBinaryHeap();

// newHeap.insert(4)
// newHeap.insert(6)
// newHeap.insert(3)
// newHeap.insert(9)
// newHeap.insert(1)
// newHeap.insert(10)
// newHeap.insert(50)

// // newHeap.insert(10)

// console.log("line 107", newHeap);
// console.log("The removed root: ",newHeap.remove());
// console.log("line 109", newHeap);
// console.log("The removed root: ",newHeap.remove());
// console.log("line 111", newHeap);
// console.log("The removed root: ",newHeap.remove());
// console.log("line 113", newHeap);

// const heapTest2 = new MaxBinaryHeap()

// heapTest2.insert(41)

// heapTest2.insert(39)
// heapTest2.insert(33)
// heapTest2.insert(18)
// heapTest2.insert(27)
// heapTest2.insert(12)
// heapTest2.insert(55)

// heapTest2.remove();
// heapTest2.remove();
// heapTest2.remove();
// heapTest2.remove();
// heapTest2.remove();
// heapTest2.remove();
// console.log(heapTest2.remove());
// console.log(heapTest2.remove());

// heapTest2.insert(55)
// heapTest2.insert(55)
// heapTest2.insert(12)
// heapTest2.insert(55)
// heapTest2.remove()
// heapTest2.remove()
// console.log(heapTest2);
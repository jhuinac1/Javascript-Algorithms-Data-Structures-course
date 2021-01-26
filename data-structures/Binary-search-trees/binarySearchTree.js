

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    /**INSERTING PSEUDOCODE
     * STEPS ( ITERATIVELY OR RECURSIVELY)
     *  - Create a new node 
     * - Starting at the root
     *      - Check if there is a root, if not - the root now becomes that new node! 
     *      - If there is a root, check if the value of the new node is greater than or less than the value of the root 
     *      - If it is greater
     *          -Check to seee if there is a ndoe to the right
     *              -If there is, move to that node and repat these steps 
     *              - If there is not, add that node as the right property
     *      - If it is less 
     *          - Check to see if there is a node to the left 
     *              - If there is, move to that node and repeat these steps 
     *              - If there is not, add that node as the left property 
     * 
     */
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
            return this;
        }else{
            let temp = this.root;
            while(true){
                if(value === temp.value) {
                    return undefined;
                }
                if(temp.value > value){
                    if(temp.left === null){
                        temp.left = newNode;
                        return this;
                    }
                    temp = temp.left;
                    continue;
                }
                if(temp.value < value){
                    if(temp.right === null){
                        temp.right = newNode;
                        return this;
                    }
                    temp = temp.right;
                }
            }
        }
        
    //     const insertion = (root) => {
    //         console.log("line 36",root);
    //         if(root === null){
    //             root = new Node(value);
    //             return this
    //         }
            
    //         if(root.value > value){
    //             if(root.left === null){
    //                 root.left = new Node(value);
    //                 return this
    //             }
    //             insertion(root.left);
    //         }
    //         if(root.value < value){
    //             if(root.right === null){
    //                 root.right = new Node(value);
    //                 return this
    //             }
    //             insertion(root.right);
    //         }
    //     }
        
    //     insertion(this.root);              

    }

    /**FINDING A NODE IN A BST
     *  Steps - Iterably or Recursively
     *  
     * Starting at the root
     *  - Check if there is a root, if not - we're done searching! 
     *  - If theere is a root, check if the value of the new node is the nvalue we are looking for. If we found it, we're done!
     *  - If not, check to see if there vlaue is greater than or less than the value of the root
     *  - If it is greater 
     *      - Check to see if there is a node to the right 
     *          - If there is, move to that node and repeat these steps 
     *          - If there is not, we're done searching! 
     *      - If it is less
     *          - Check to see if there is a node to the left 
     *              - If there is, move to that node and repeat these steps
     *              - If there is not, we're done searching!
     */
    find(value){
        if(!this.root){
            return false;
        }
        else {
            let temp = this.root;
            while(temp){
                if(temp.value === value) {
                    return true;
                }
                if(temp.value > value) {
                    temp = temp.left;
                }else{
                    temp = temp.right;
                }
            }
            return false;
        }
    }
}


const newTree = new BinarySearchTree();

// newTree.root = new Node(10);
// newTree.root.left = new Node(7);
// newTree.root.right = new Node(15);
// newTree.root.left.right = new Node(8);
newTree.insert(4);
newTree.insert(10);
newTree.insert(2);
newTree.insert(8);
newTree.insert(12);
newTree.insert(12);
console.log(newTree);


console.log(newTree.find(4));
console.log(newTree.find(10));
console.log(newTree.find(2));
console.log(newTree.find(8));
console.log(newTree.find(12));
console.log(newTree.find(11));
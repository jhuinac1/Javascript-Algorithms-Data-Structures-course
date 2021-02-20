// Most data in the real-world tends to lend itself to sparser and/or larger graphs


//Adding a vertex
/** - Write a method called addVertex, which accepts a name of a vertex
 * - It should add a key to the adjacency list with the name with the vertex and set its value to be an empty array 
 */


 //Adding an EDGE
 /**
  * - This function should accept two vertices, we can call them vetex1 and vertex2
  * - The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
  * - The function should find in hte adjacency list the key of vertex2 adn push vertex1 to the array 
  * - Don't worry about handling errors/invalid vertices
  */


  /** Removing an Edge 
   * - This function shoudl accept two vertices, we'll call them vertex1 and vertex2 
   * - The function should reassign the key of vertex1 to be an array that does not contain vertex2
   * - The function should reassign the key of vertex2 to be an array that does not contain vertex1 
   * - Don't worry about handling errors/invalid vertices
   */

   /** Removing a Vertex
    * - The function should accept a vertex to remove
    * - The function should loop as long as there are any other vertices in the adjacency list for that vertex;
    * - Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
    *  - Delete the key in that adjacency list for that vertex
    */
class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }        
    }

    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( (vertex) => {
                return vertex !== vertex2;
            })
        }
        if(this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( (vertex) => {
                return vertex !== vertex1;
            })
        }
    }

    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            while(this.adjacencyList[vertex].length > 0){
                this.removeEdge(vertex, this.adjacencyList[vertex][0]);
            }
            delete this.adjacencyList[vertex];
        }
    }
}


const new1 = new Graph();

new1.addVertex("Tokyo")
new1.addVertex("Seattle")
new1.addVertex("New York")
new1.addVertex("Austin")
console.log(new1);

new1.addEdge("Tokyo", "Seattle");
// new1.addEdge("Tokyo", "Seat");
// new1.addEdge("seattle", "new york");
new1.addEdge("Seattle", "New York");
new1.addEdge("Seattle", "Austin");
new1.addEdge("Tokyo", "New York");
new1.addEdge("Tokyo", "Austin");
new1.addEdge("New York", "Austin");
console.log(new1);

new1.removeVertex("Austin")
console.log(new1);

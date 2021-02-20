/** DFS PSEUDOCODE
 *  DFS(vertex) :
 *  If vertex is empty
 *      return (this is base case)
 *  add vertex to results list.
 *  mark vertex as visited
 *  for each neighbor in vertex's neighbors:
 *      if neighbor is not visited:
 *          recursively call dfs on neighbor
 *
 * visted ={ A: true, B: true, C: true}
 *
 * More explicit pseudocode
 * - The ufnction should accept a starting node
 * - Create a list to store the end result, to be returned at the very end
 * - Create an object to store visited vertices
 * - Create a helper function which accepts a vertex
 *      - The ehlper function should return early if the vertex is empty
 *      - The helper function should place the vertex it accepts into the visited object and push that veretx into the result array.
 *      - Loop over all of the values in the adjacencyList for that vertex
 *      - If any of those values have not been visited, recursively invoke the helper function with that vertex;
 *      - Invoke the helper function with that starting vertex
 * mark it as visited
 *      - Return the result array
 */

/** ITERATIVE SOLUTION OF DFS
 *
 *     DFS-Iterative(start):
 *         Let S be a stack
 *         S.push(start);
 *         While S is not empty
 *             vertex = s.pop();
 *             if vertex is not labeled as discovered:
 *                 visit vertex (add to result list)
 *                 label vertex as discovered
 *                 for each of vertex's neighbors, N do
 *                     S.push(N)
 *
 *     MORE EXPLICIT PSEUDOCODE
 *     The function should accept a starting node
 *     Create a stack to help use keep track of vertices (use a list/array)
 *     Create a list to store the end result, to be returned at the very end
 *     Create an object to store visited vertices
 *     Add the starting vertex to the stack, and mark it visited
 *     while the stack has something in it:
 *         Pop the next vertex from the stack
 *         if that vertex hasn't been visited yet:
 *             Mark it as visited
 *             add it to the result list
 *             push all of its neightbors into the stack
 *     Return the result array.
 */
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => {
          return vertex !== vertex2;
        }
      );
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => {
          return vertex !== vertex1;
        }
      );
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length > 0) {
        this.removeEdge(vertex, this.adjacencyList[vertex][0]);
      }
      delete this.adjacencyList[vertex];
    }
  }
  dfsTraversal(vertex) {
    const resultList = [];
    const visited = new Map();

    const traverse = (vertex) => {
      visited[vertex] = true;
      resultList.push(vertex);
      for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
        if (!visited[this.adjacencyList[vertex][i]]) {
          traverse(this.adjacencyList[vertex][i]);
        }
      }
      return;
    };
    traverse(vertex);
    return resultList;
  }
  dfsIterativeTraversa(start) {
    const stack = [];
    const resultList = [];
    const visited = new Map();
    stack.push(start);
    visited[start] = true;

    while (stack.length) {
      let v = stack.pop();
      resultList.push(v);
      this.adjacencyList[v].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          stack.push(element);
        }
      });
    }
    return resultList;
  }

  /** Breadth first search
   *   It uses a queue for data structure, but for this example an array;
   *
   *    This function shoudl accept a starting vertext
   *    Create a queue( you can use an array) and place the starting vertex in it
   *    Create an array to store the nodes visited
   *    Mark the starting vertex as visited
   *    Loop as long as there is anything in the queue
   *    Remove the first vertext from the queue and push it into the array that stores nodes visited
   *    Loop over each vertex in the adjacency list for the vertex you are visiting.
   *    If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
   *    Once you have finished looping, return the array of visited nodes
   */
  bfsIterativeTraversa(start) {
    const stack = [start];
    const visited = new Map();
    const resultList = [];
    visited[start] = true;

    while (stack.length) {
      let vertex = stack.shift();
      resultList.push(vertex);
      this.adjacencyList[vertex].forEach((vertex) => {
        if (!visited[vertex]) {
          visited[vertex] = true;
          stack.push(vertex);
        }
      });
    }
    return resultList;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g);

console.log(g.dfsTraversal("A"));
console.log(g.dfsIterativeTraversa("A"));
console.log(g.bfsIterativeTraversa("A"));

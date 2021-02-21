class WeightedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    //build up initial state // loop through entire adjacencyList.and set inital distances
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    //as long as there is something to visit
    let path = [];
    let smallest;
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest === finish) {
        //We are done
        // build up path to return at end

        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        //loopint through all the neighbors of smallest
        for (let neighbor of this.adjacencyList[smallest]) {
          //   console.log(neighbor);
          //Calculate new distance to neighboring node
          let candidate = distances[smallest] + neighbor.weight;
          //grabing the neighbor node(vertext). {node: "C", weight ""} // "C"
          let nextNeighbor = neighbor.node;
          //if the current candidate is less, than the previous, then update
          if (candidate < distances[nextNeighbor]) {
            // update the new value for the distance
            distances[nextNeighbor] = candidate;
            //setting up the path to the previous to be the "parent"
            previous[nextNeighbor] = smallest;
            //adding it to the priority queue {value: "C", priority: "candidate"}
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    //adding the initial value and then reversing it, to have it in order.
    path.push(smallest);
    return path.reverse();
  }
}

class Node {
  constructor(value, priority) {
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
  constructor() {
    this.values = [];
  }

  getParent(child) {
    return Math.floor((child - 1) / 2);
  }
  getFirstChild(parent) {
    return 2 * parent + 1;
  }
  getSecondChild(parent) {
    return 2 * parent + 2;
  }
  lastItemIndex() {
    return this.length() - 1;
  }
  length() {
    return this.values.length;
  }
  minElement(index1, index2) {
    // console.log("index", index1, "index 2:", index2);
    // console.log("indexvalue:", this.values[index1]);
    // console.log("index2value:", this.values[index2]);
    if (this.values[index2] === undefined) {
      if (this.values[index1] === undefined) {
        return undefined;
      }
      return index1;
    }
    return this.values[index2].priority <= this.values[index1].priority
      ? index2
      : index1;
  }
  swapElements(index1, index2) {
    const temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    let index = this.lastItemIndex();
    let parent = this.getParent(index);

    while (
      index &&
      this.values[parent].priority > this.values[index].priority
    ) {
      this.swapElements(index, parent);
      index = parent;
      parent = this.getParent(index);
    }
  }

  dequeue() {
    if (this.values.length === 0) {
      return undefined;
    }
    if (this.values.length === 1) {
      return this.values.pop();
    }
    let parentIndex = 0;
    let maxRemoved = this.values[parentIndex];

    this.values[parentIndex] = this.values.pop();

    while (parentIndex < this.lastItemIndex()) {
      let minSiblingIdx = this.minElement(
        this.getFirstChild(parentIndex),
        this.getSecondChild(parentIndex)
      );
      if (minSiblingIdx === undefined) {
        break;
      }
      if (
        this.values[parentIndex].priority <
          this.values[minSiblingIdx].priority ||
        minSiblingIdx > this.lastItemIndex()
      ) {
        break;
      }
      this.swapElements(parentIndex, minSiblingIdx);
      parentIndex = minSiblingIdx;
    }
    return maxRemoved;
  }
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

// console.log(graph.adjacencyList);
console.log(graph.Dijkstra("A", "E"));

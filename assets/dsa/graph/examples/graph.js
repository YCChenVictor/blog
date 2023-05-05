class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  getNeighbors(vertex) {
    return this.adjacencyList[vertex];
  }

  getVertices() {
    return Object.keys(this.adjacencyList);
  }

  getEdges() {
    return 
  }

  removeEdge(vertex1, vertex2) {
    let index2 = this.adjacencyList[vertex1].indexOf(vertex2)
    let index1 = this.adjacencyList[vertex2].indexOf(vertex1)
    if (index2 > -1) {
      this.adjacencyList[vertex1].splice(index2, 1)
    }
    if (index1 > -1) {
      this.adjacencyList[vertex2].splice(index1, 1)
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      neighborVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, neighborVertex)
    }
  }

  depthFirstSearch(vertex, visited = new Set()) {
    visited.add(vertex);
    this.getNeighbors(vertex).forEach(neighbor => {
      if(!visited.has(neighbor)) {
        this.depthFirstSearch(neighbor, visited)
      }
    })
    return visited
  }
  
  breadthFirstSearch(startingVertex) {
    const queue = [startingVertex];
    const visited = new Set([startingVertex]);

    while (queue.length) {
      const currentVertex = queue.shift();
      const neighbors = this.getNeighbors(currentVertex);
  
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    
    return visited;
  }
}

module.exports = Graph;

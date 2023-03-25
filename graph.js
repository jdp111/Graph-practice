class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let node of vertexArray){
      this.addVertex(node)
    }
  }  

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let searchStack = [start]
    let visited = new Set(searchStack)
    let resArr = []

    while(searchStack.length){
      let current = searchStack.pop()
      resArr.push(current.value)
        
        for (let node of current.adjacent){
          if(!visited.has(node)){
          searchStack.push(node)
          visited.add(node)}
        }
      
    }
    console.log(resArr)
    return resArr
  
  }
    

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let searchQueue = [start]
    let visited = new Set(searchQueue)
    let resArr = []

    while(searchQueue.length){
      let current = searchQueue.shift()
      resArr.push(current.value)
        
        for (let node of current.adjacent){
          if(!visited.has(node)){
          searchQueue.push(node)
          visited.add(node)}
        }
      
    }
    console.log(resArr)
    return resArr
  }
}

module.exports = {Graph, Node}
class Graph{
  adjacencyList:any
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex:any){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = []
      return true
    }
    return false
  }
  addEdge(vertex1:any,vertex2:any){
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
      return true
    }
    return false
  }
  removeEdge(vertex1:any,vertex2:any){
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v:any)=>v!=vertex2)
      this.adjacencyList[vertex2]  = this.adjacencyList[vertex2].filter((v:any)=>v!=vertex1)
      return true
    }
    return false
  }
  removeVertex(vertex:any,){
    while(this.adjacencyList[vertex].length){
      const temp =  this.adjacencyList[vertex].pop()
      this.removeEdge(vertex,temp)
      return true
    }
    delete this.adjacencyList[vertex]
    return false
  }
}
const graph  = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A','B')
graph.addEdge('B','C')
graph.removeEdge('B','C')
console.log(graph)
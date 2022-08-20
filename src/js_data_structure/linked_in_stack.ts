// class MyNode {
//   value: any;
//   next: any;
//   constructor(value: any) {
//     this.value = value
//     this.next = null
//   }
// }
// class Stack{
//   top:any
//   length:number=0
//   constructor(value:any){
//     const newNode = new MyNode(value)
//     this.top = newNode
//     this.length++
//   }

//   push(value:any){
//       const newNode = new MyNode(value)
//       newNode.next = this.top
//       this.top = newNode
//       this.length++
//       return this
//   }
//   pop(){
//     if(this.length ===0) return undefined
//       const temp = this.top
//       this.top = this.top.next
//       temp.next=null
//       this.length--
//      return temp
//   }
// }
// const myStack = new Stack(1)
// myQueue.push(2)
// myQueue.push(3)
// myQueue.pop()

// console.dir(myQueue)
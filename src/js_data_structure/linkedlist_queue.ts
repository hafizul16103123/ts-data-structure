// class MyNode {
//   value: any;
//   next: any;
//   constructor(value: any) {
//     this.value = value
//     this.next = null
//   }
// }
// class Queue {
//   first: any
//   last: any
//   length: number = 0
//   constructor(value: any) {
//     const newNode = new MyNode(value)
//     this.first = newNode
//     this.last = newNode
//     this.length++
//   }

//   enqueue(value: any) {
//     const newNode = new MyNode(value)
//     if (this.length == 0) {
//       this.first = newNode
//       this.last = newNode
//     } else {
//       this.last.next = newNode
//       this.last = newNode
//     }
//     this.length++
//     return this
//   }
//   dequeue() {
//     if (this.length === 0) return undefined
//     const temp = this.first
//     if (this.length == 1) {
//       this.first = null
//       this.last = null
//     } else {
//       this.first = this.first.next
//       temp.next = null
//     }
//     this.length--
//     return temp
//   }
// }
// const myQueue = new Queue(1)
// myQueue.enqueue(2)
// myQueue.enqueue(3)
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()

// console.dir(myQueue)
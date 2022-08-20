
// class NewNode {
//     value: any;
//     next: any;
//     prev: any;
//     constructor(value: any) {
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }
// class DoublyLinkedList {
//     head: any;
//     tail: any;
//     length: number = 0;
//     constructor(value: any) {
//         const newNode = new NewNode(value);
//         this.head = newNode;
//         this.tail = this.head;
//         this.length++;
//     }

//     push(value: any) { // O(1)
//         const newNode = new NewNode(value);
//         if (!this.head) {
//             this.head = newNode
//             this.tail = newNode
//         } else {
 
//             this.tail.next = newNode;
//             newNode.prev = this.tail
//             this.tail = newNode
//         }
//         this.length++;
//         return this
//     }
//     pop() {// O(n)
//         if (!this.tail) return undefined;
//         let temp = this.tail
//         if (this.length === 1) {
//             this.head = null
//             this.tail = null
//         }else{
//             this.tail =  this.tail.prev  
//             this.tail.next = null
//             temp.pre = null
//         }

//         this.length--;
//         return temp 
//     }
//     unshift(value: any) {
//         const newNode = new NewNode(value);
//         if (!this.head) {
//             this.head = newNode
//             this.tail = newNode
//         } else {
//             newNode.next = this.head
//             this.head.prev = newNode
//             this.head = newNode
//         }
//         this.length++
//         return this
//     }
//     shift() {
//         if (this.length===0) return undefined
//         const temp = this.head;
//         if(this.length===1){
//             this.tail =null
//             this.head =null
//         }else{
//             this.head = this.head.next
//             this.head.prev = null
//             temp.next = null
//         }

//         this.length--
//         return temp
//     }
//     get(index:number) {
//         if (index<0 || index>=this.length) return undefined
//         let temp = this.head;
//         if(index<this.length/2){
//             for (let i = 0; i < index; i++) {
//                 temp = temp.next;
               
//               }
//         }else{
//             temp = this.tail;
//             for (let i = this.length-1; i > index ; i--) {
//                 temp = temp.prev;
               
//               }
//         }
      
//         return temp
//     }
//     set(index:number,value:any) {
        
//         const temp = this.get(index)
//         if(temp){
//             temp.value= value;
//             return true
//         }
//         return false
//     }
//     insert(index:number,value:any){
//         if(index===0) return this.unshift(value)
//         if(index===this.length) return this.push(value)
//         if (index<0 || index>=this.length) return false
        
//         const newNode = new NewNode(value);
//         const before = this.get(index-1)
//         const after = before.next

//         before.next = newNode
//         newNode.prev = before
//         newNode.next = after
//         after.prev = newNode

//         this.length++
//         return true
//     }
//     remove(index:number,){
//         if(index===0) return this.shift()
//         if(index===this.length) return this.pop()
//         if (index<0 || index>=this.length) return undefined

//         const temp = this.get(index)
//         temp.prev.next= temp.prev
//         temp.next =temp.prev
//         temp.next=null
//         temp.prev=null
//         this.length--
//         return temp
       
//     }
//     reverse(){
//        let temp = this.head
//        let prev = null
//        let next = temp.next
//        this.head = this.tail
//        this.tail= temp
//        for (let i = 0; i < this.length; i++) {
//            next = temp.next
//         temp.next = prev
//         prev = temp
//         temp = next
        
//        }
      
//         return this
       
//     }

// }

// const myDoublyLinkedList = new DoublyLinkedList(0)
// myDoublyLinkedList.push(1)
// myDoublyLinkedList.insert(1,2)
// // myDoublyLinkedList.push(3)
// // const get = myDoublyLinkedList.get(2)
// console.log(myDoublyLinkedList)



// class NewNode {
//     value: any;
//     next: any;
//     constructor(value: any) {
//         this.value = value
//         this.next = null
//     }
// }
// class LinkedList {
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
//             this.tail = newNode
//         }
//         this.length++;
//         return this
//     }
//     pop() {// O(n)
//         if (!this.head) return undefined;
//         let temp = this.head
//         let pre = this.head
//         while (temp.next) {
//             pre = temp;
//             temp = temp.next
//         }
//         this.tail = pre
//         this.tail.next = null
//         this.length--;
//         if (this.length === 0) {
//             this.head = null
//             this.tail = null
//         }
//     }
//     unshift(value: any) {
//         const newNode = new NewNode(value);
//         if (!this.head) {
//             this.head = newNode
//             this.tail = newNode
//         } else {
//             newNode.next = this.head
//             this.head = newNode
//         }
//         this.length++
//         return this
//     }
//     shift() {
//         if (!this.head) return undefined
//         const temp = this.head;
//         temp.next = null
//         this.head = this.head.next
//         this.length--
//         if(this.length===0){
//             this.tail =null
//         }
//         return temp
//     }
//     get(index:number) {
//         if (index<0 || index>=this.length) return undefined
//         let temp = this.head;
//        for (let i = 0; i < index; i++) {
//          temp = temp.next;
        
//        }
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
//         const newNode = new NewNode(value);
//         if(index===0) return this.unshift(value)
//         if(index===this.length) return this.push(value)
//         if (index<0 || index>=this.length) return false
//         const temp = this.get(index-1)
//         newNode.next = temp.next
//         temp.next = newNode
//         this.length++
//         return true
//     }
//     remove(index:number,){
//         if(index===0) return this.shift()
//         if(index===this.length) return this.pop()
//         if (index<0 || index>=this.length) return undefined
//         const before = this.get(index-1)
//         const temp = before.next
//         before.next =temp.next
//         temp.next=null
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

// const myLinkedList = new LinkedList(1)
// myLinkedList.push(2)
// myLinkedList.push(3)
// myLinkedList.reverse()

// console.log(myLinkedList)


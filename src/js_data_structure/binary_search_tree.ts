class MyNode {
  value: any;
  left: any;
  right: any;
  constructor(value: any) {
    this.value = value
    this.left = null
    this.right = null
  }
}
class BST {
  root: any
  last: any
  length: number = 0
  constructor() {
    this.root = null
  }
  insert(value: any) {
    const newNode = new MyNode(value)
    //if root is null
    if (this.root == null) {
      this.root = newNode
      this.length++
      return this
    }
    let temp = this.root;
    // if duplicate value come
    if (newNode.value == temp) return undefined
    //if value less then or greater then
    while (true) {
      if (newNode.value < temp.value) {
        if (temp.left == null) {
          temp.left = newNode
          this.length++
          return this
        }
        temp = temp.left
      } else {
        if (temp.right == null) {
          temp.right = newNode
          this.length++
          return this
        }
        temp = temp.right
      }

    }

  }
  contains(value: any) {
    //if root is null return undefined
    if (this.root === null) return undefined
    let temp = this.root
    while (temp) {
      if (value < temp.value) {
        temp = temp.left
      } else if (value > temp.value) {
        temp = temp.right
      } else {
        return true
      }
    }
    return false
  }

}
const bst = new BST()
bst.insert(10)
bst.insert(20)
bst.insert(1)
const conatains = bst.contains(10)
console.log(bst)
console.log(conatains)
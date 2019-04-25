/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  /** 
  * @param {number} x
  * @return {void}
  */
  push(x) {
    this.stack.push(x);
    if(!this.minStack.length || x <= this.getMin()) {
      this.minStack.push(x);
    }
  }
  /**
  * @return {void}
  */
  pop() {
    const top = this.stack.pop();
    if(top === this.getMin()) {
      this.minStack.pop();
    }
  }
  /**
  * @return {number}
  */
  top() {
    return this.stack[this.stack.length - 1];
  }
  /**
  * @return {number}
  */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
function LinkNode(key, val) {
  this.key = key;
  this.val = val;
  this.pre = null;
  this.next = null;
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    // 防止对null节点的讨论，初始化双向链表时设置虚拟头节点和虚拟尾节点
    this.dummyHead = new LinkNode(0, 0);
    this.dummyTail = new LinkNode(0, 0);
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.pre = this.dummyHead;
    this.map = new Map();
  }
  /**
   * 
   * @param {LinkNode} node 
   * @description 将节点添加到虚拟头节点之后
   */
  add(node) {
    const dummyHead = this.dummyHead;
    const nextNode = dummyHead.next;
    dummyHead.next = node;
    node.next = nextNode;
    nextNode.pre = node;
    node.pre = dummyHead;
  }
  /**
   * 
   * @param {LinkNode} node 
   * @description 删除节点
   */
  delete(node) {
    const preNode = node.pre;
    const nextNode = node.next;
    preNode.next = nextNode;
    nextNode.pre = preNode;
    node.next = null;
    node.pre = null;
  }
  /** 
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const node = this.map.get(key);
    if(node) {
      // 先删后增
      this.delete(node);
      this.add(node);
      return node.val;
    } else {
      return -1;
    }
  }
  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    const map = this.map;
    let node = map.get(key);
    // 相同key节点，更新value，调整双向链表位置
    if(node) {
      node.val = value;
      this.delete(node);
      this.add(node);
    } else {
      node = new LinkNode(key, value);
      this.add(node);
      if(map.size === this.capacity) {
        const preNode = this.dummyTail.pre;
        this.delete(preNode);
        map.delete(preNode.key);
      }
      map.set(key, node);
    };
  }
}
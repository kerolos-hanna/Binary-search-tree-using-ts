class node<T> {
  data: T;
  left: node<T> | null;
  right: node<T> | null;
  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST<T> {
  private root: node<T> | null = null;

  private addHelper(temp: node<T>, value: T) {
    if (value <= temp.data) {
      if (temp.left === null) temp.left = new node<T>(value);
      else this.addHelper(temp.left, value);
    } else {
      if (temp.right === null) temp.right = new node<T>(value);
      else this.addHelper(temp.right, value);
    }
  }

  private searchHelper(temp: node<T>, value: T) {
    if (value === temp.data || temp === null) return temp;
    if (value < temp.data) {
      return this.searchHelper(temp.left, value);
    } else {
      return this.searchHelper(temp.right, value);
    }
  }

  private getMaxHelper(temp: node<T>): T {
    if (temp.right === null) return temp.data;
    return this.getMaxHelper(temp.right);
  }

  private getMinHelper(temp: node<T>): T {
    if (temp.left === null) return temp.data;
    return this.getMinHelper(temp.left);
  }

  private getTheHeightHelper(temp: node<T>): number {
    if (temp === null) return -1;
    let leftSubTree = this.getTheHeightHelper(temp.left);
    let rightSubTree = this.getTheHeightHelper(temp.right);
    return 1 + Math.max(leftSubTree, rightSubTree);
  }

  add(data: T) {
    if (!this.root) {
      this.root = new node<T>(data);
      return;
    }
    this.addHelper(this.root, data);
  }

  search(value: T): node<T> | null {
    if (this.root === null) return null;
    const result = this.searchHelper(this.root, value);
    return result;
  }

  getMax(): T {
    return this.getMaxHelper(this.root);
  }

  getMin(): T {
    return this.getMinHelper(this.root);
  }

  getTheHeight(): number {
    if (this.root === null) return -1;
    return this.getTheHeightHelper(this.root);
  }

  // traversalBT(): T {}

  print(): void {
    console.log("root: ", this.root);
  }
}

const BST1 = new BST<number>();
BST1.add(10);
BST1.add(15);
BST1.add(4);
BST1.add(3);
BST1.add(7);
BST1.add(9);
BST1.add(6);
console.log("search result: ", BST1.search(9));
console.log("max num: ", BST1.getMax());
console.log("min num: ", BST1.getMin());
console.log("height: ", BST1.getTheHeight());
BST1.print();

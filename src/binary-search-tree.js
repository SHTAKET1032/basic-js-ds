const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.acc = null;
  }

  root() {
    return this.acc;
  }

  add(data) {
    this.acc = addNode(this.acc, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasNode(this.acc, data);

    function hasNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return hasNode(node.left, data);
      } else {
        return hasNode(node.right, data);
      }
    }
  }

  find(data) {
    return hadS(this.acc, data);
        function hadS(node, data) {
          if (!node) {
            return null;
          }
          if (node.data === data) {
            return node;
          }
          if (data < node.data) {
            return hadS(node.left, data);
          } else {
            return hadS(node.right, data);
          }
        }
    }

  remove(data) {
    this.rootF = removeNode(this.acc, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minR = node.right;
        while (minR.left) {
          minR = minR.left;
        }
        node.data = minR.data;

        node.right = removeNode(node.right, minR.data);
        return node;
      }
    }
  }

  min() {
    if (!this.acc) {
      return;
    }

    let node = this.acc;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.acc) {
      return;
    }

    let node = this.acc;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};